require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.generateToken = payload => {
  return jwt.sign(payload, process.env.SECRET, { expiresIn: '72h' }).split('.')
}

exports.verifyToken = token => {
  return jwt.verify(token, process.env.SECRET)
}
