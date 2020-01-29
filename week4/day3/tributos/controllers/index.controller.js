const Food = require('../models/Food')

exports.homeGet = async (req, res) => {
  // Food.find()
  //   .then(foods => res.render('home', { foods }))
  //   .catch(err => res.render('home', { err }))
  const foods = await Food.find()
  res.render('home', { foods })
}

exports.createFood = (req, res) => {
  const food = { name: 'Takis', brand: 'Barcel', rate: 5 }
  Food.create(food)
    .then(food => res.send(food))
    .catch(err => res.send('no sea pendejo mijo'))
}

exports.barcelFoods = async (req, res) => {
  const foods = await Food.find({ brand: 'Barcel' })
  res.render('foods/barcel', { foods })
}
