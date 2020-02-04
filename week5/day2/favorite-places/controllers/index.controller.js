const Place = require('../models/Place')

exports.indexGet = async (_, res) => {
  const places = await Place.find().sort({ createdAt: -1 })
  res.render('index', { places })
}

exports.createGet = (_, res) => {
  const options = ['church', 'bar', 'cantina', 'restaurant', 'other']
  res.render('create', { options })
}

exports.createPost = async (req, res) => {
  const { name, address, latitude, longitude, placeType, author } = req.body
  const newPlace = {
    name,
    author,
    placeType,
    location: {
      address,
      coordinates: [longitude, latitude]
    }
  }
  const { _id } = await Place.create(newPlace)
  res.redirect(`/places/${_id}`)
}

exports.detailGet = async (req, res) => {
  const { id } = req.params
  const place = await Place.findById(id)
  res.render('detail', place)
}
