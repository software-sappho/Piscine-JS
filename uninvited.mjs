import http from 'http'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const PORT = 5000
const GUESTS_DIR = join(process.cwd(), 'guests')

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'not found' }))
    return
  }

  const guestName = req.url.slice(1)
  const filePath = join(GUESTS_DIR, `${guestName}.json`)

  let body = ''

  req.on('data', chunk => {
    body += chunk
  })

  req.on('end', async () => {
    try {
      const parsed = JSON.parse(body)

      await writeFile(filePath, body)

      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(parsed))
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'server failed' }))
    }
  })
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
