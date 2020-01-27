const http = require('http')
const fs = require('fs')
const PORT = 3000

const indexHTML = fs.readFileSync('./public/index.html')
const aboutMe = fs.readFileSync('./public/aboutme.html')
const funfact = fs.readFileSync('./public/funfact.html')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write(indexHTML)
      res.end()
      break
    case '/about':
      res.write(aboutMe)
      res.end()
      break
    case '/funfact':
      res.write(funfact)
      res.end()
      break
    default:
      res.write(`<h1>Not found 404</h1>`)
      res.end()
      break
  }
})

server.listen(PORT, () => {
  console.log(`Running on port ${PORT} 🚀`)
})
