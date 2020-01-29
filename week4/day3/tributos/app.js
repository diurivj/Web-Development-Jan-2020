require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')

mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to the DB'))
  .catch(err => console.log(err))

const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
hbs.registerPartials(__dirname + '/views/partials')

const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`)
})

// Model.create([])
// Model.findOneAndUpdate({}, {}, { new: true })

// mongoose
//   .connect(process.env.DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   })
//   .then(() => {
//     // iteration 1

//     // iteration 2

//     // iteration 3

//     ...

//     mongoose.connection.close()
//   })
//   .catch(err => console.log(err))
