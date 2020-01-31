const express = require('express')
const router = express.Router()
const { generateToken, verifyToken } = require('../config/jwt')

const hasPermission = (req, res, next) => {
  const { headload, signature } = req.cookies
  if (!headload || !signature) {
    return res.redirect('/')
  } else {
    verifyToken(`${headload}.${signature}`) ? next() : res.redirect('/')
  }
}

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { id, name } = req.body
  const [header, payload, signature] = generateToken({ id, name })
  res.cookie('headload', `${header}.${payload}`, {
    // secure: true,
    // expires: 1000 * 60 * 30
  })
  res.cookie('signature', signature, {
    // httpOnly: true,
    // secure: true
  })
  res.send(header, payload, signature)
})

router.get('/private', hasPermission, (req, res) => {
  res.send('tu token era valido')
})

module.exports = router
