import http from 'http'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const PORT = 5000
const GUESTS_DIR = join(process.cwd(), 'guests')

// Allowed credentials
const allowedUsers = new Set([
  'Caleb_Squires:abracadabra',
  'Tyrique_Dalton:abracadabra',
  'Rahima_Young:abracadabra',
])

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'not found' }))
    return
  }

  const authHeader = req.headers.authorization || ''
  const [type, encoded] = authHeader.split(' ')

  const isAuthorized =
    type === 'Basic' &&
    allowedUsers.has(Buffer.from(encoded, 'base64').toString())

  if (!isAuthorized) {
    res.writeHead(401, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Authorization Required' }))
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
      await writeFile(filePath, body)

      let parsed
      try {
        parsed = JSON.parse(body)
      } catch {
        parsed = body
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(parsed))
    } catch {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'server failed' }))
    }
  })
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
