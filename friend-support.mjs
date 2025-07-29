import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory path of this module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the 'guests' folder
const guestsDir = path.join(__dirname, 'guests');

// Create the HTTP server
const server = http.createServer(async (req, res) => {
  // Allow only GET requests
  if (req.method !== 'GET') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'guest not found' }));
    return;
  }

  const guestName = req.url.slice(1); // remove leading slash

  try {
    const filePath = path.join(guestsDir, `${guestName}.json`);
    const data = await fs.readFile(filePath, 'utf8');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File not found
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      // Server error
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

// Listen on port 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Friend support server is running on port ${PORT}`);
});
