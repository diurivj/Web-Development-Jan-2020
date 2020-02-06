const User = require('../models/User')
const { confirmAccount } = require('../config/nodemailer')
const passport = require('passport')

exports.indexGet = (req, res, next) => res.render('index')

exports.signupPost = async (req, res, next) => {
  const { name, email, password } = req.body
  const user = await User.register({ name, email }, password)
  await confirmAccount(
    email,
    `https://shielded-woodland-17363.herokuapp.com/confirm/${user._id}`
  )
  res.render('index', { msg: 'User registered' })
}

exports.loginPost = passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/profile'
})

exports.confirmGet = async (req, res, next) => {
  const { id } = req.params
  const user = await User.findByIdAndUpdate(id, { active: true }, { new: true })
  res.redirect('/profile')
}

exports.profileGet = (req, res, next) => {
  const { user } = req
  console.log(user)
  res.render('profile', user)
}

exports.profilePost = async (req, res, next) => {
  const { _id } = req.user
  const { secure_url: photoURL } = req.file
  const user = await User.findByIdAndUpdate(_id, { photoURL }, { new: true })
  req.user = user
  res.redirect('/profile')
}

exports.logout = (req, res, next) => {
  req.logout()
  res.redirect('/')
}
