// para poder utilizar variables de entorno
require('dotenv').config()
// para poder parsear y ver el req.body
const bodyParser = require('body-parser')
// basicamente hace lo mismo que body-parser pero para las cookies
const cookieParser = require('cookie-parser')
// crea mi servidor
const express = require('express')
// para poder servir un favicon
const favicon = require('serve-favicon')
// es nuestro view engine
const hbs = require('hbs')
// para conectarnos a la DB de Mongo
const mongoose = require('mongoose')
// para ser menos tontos
const logger = require('morgan')
// para poder especificar bien las rutas de los archivos
const path = require('path')

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

mongoose
  .connect('mongodb://localhost/mr-robot', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err))

// Esta tomando como el nombre de nuestro proyecto, el nombre que le dimos al package.json
const app_name = require('./package.json').name

// Es para loggear todos los errores, de la forma mas explicita posible y no tengamos que preguntarle al TA, simplemente, leer el error
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
)

// Crea mi servidor
const app = express()

app.use(
  session({
    secret: process.env.SECRET,
    cookie: { maxAge: 60000, httpOnly: false, secure: false },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  })
)

// El logger solo lo utilice cuando estamos en desarollo
app.use(logger('dev'))
// Para parsear bonito el req.body
app.use(bodyParser.json())
// Lo vamos aprender mas adelante
app.use(bodyParser.urlencoded({ extended: false }))
// Configurando el cookie parser
app.use(cookieParser())

// Express View engine setup

// Le estamos diciendo al servidor que podemos utilizar scss
app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
)

// Le estamos diciendo donde van a estar nuestra carpeta de las vistas
app.set('views', path.join(__dirname, 'views'))
// Estamos configurando hbs como view engine
app.set('view engine', 'hbs')
// Especificando a express cual va a ser nuestra carpeta de archivos estaticos o publicos
app.use(express.static(path.join(__dirname, 'public')))
// Especificando en que parte va a estar nuestro favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// Locals es nuestro apartado magico que es global en toda nuestra app
app.locals.title = 'Express - Generated with IronGenerator'

// Importando nuestro archivo de rutas
const index = require('./routes/index')
app.use('/', index)

module.exports = app
