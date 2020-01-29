const router = require('express').Router()
const {
  homeGet,
  createFood,
  barcelFoods
} = require('../controllers/index.controller')

router.get('/', homeGet)
router.get('/create', createFood)
router.get('/barcel', barcelFoods)

module.exports = router
