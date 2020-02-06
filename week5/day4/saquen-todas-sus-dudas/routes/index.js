const router = require('express').Router()
const upload = require('../config/cloudinary')
const { catchErrors } = require('../middlewares/catchErrors')
const { isLoggedIn, isActive } = require('../middlewares/auth')
const {
  indexGet,
  signupPost,
  loginPost,
  confirmGet,
  profileGet,
  profilePost,
  logout
} = require('../controllers/index.controller')

router.get('/', indexGet)
router.post('/signup', catchErrors(signupPost))
router.post('/login', loginPost)
router.get('/confirm/:id', catchErrors(confirmGet))
router.get('/profile', isLoggedIn, isActive, profileGet)
router.post(
  '/profile',
  isLoggedIn,
  isActive,
  upload.single('photoURL'),
  profilePost
)
router.get('/logout', logout)

module.exports = router
