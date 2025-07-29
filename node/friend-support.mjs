import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;
const GUESTS_DIR = path.join(process.cwd(), 'guests');

const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'guest not found' }));
    return;
  }

  const guestName = req.url.slice(1);
  const guestFilePath = path.join(GUESTS_DIR, `${guestName}.json`);

  try {
    const content = await fs.readFile(guestFilePath, 'utf-8');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`Friend support server is running on port ${PORT}`);
});
