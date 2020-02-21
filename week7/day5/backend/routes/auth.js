const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../config/passport')
const uploadCloud = require('../config/cloudinary')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req
  res.status(200).json({ user })
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
})

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

router.post(
  '/upload',
  isAuth,
  uploadCloud.single('photoURL'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { photoURL: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

module.exports = router
