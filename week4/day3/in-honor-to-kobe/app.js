const express = require('express')
const hbs = require('hbs')
const indexRoutes = require('./routes')
const PORT = 3000

const app = express()

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use('/', indexRoutes)

// ESTO ES ALCANZABLE PARA TODA NUESTRA APLICACION
app.locals.TITLE = 'Kobe Bryant'

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
