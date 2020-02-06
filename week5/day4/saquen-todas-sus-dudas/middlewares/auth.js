exports.isLoggedIn = (req, res, next) => {
  req.isAuthenticated() ? next() : res.redirect('/')
}

exports.isActive = (req, res, next) => {
  req.user.active ? next() : res.send('Confirm your account')
}

exports.nav = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.app.locals.logged = true
  } else {
    req.app.locals.logged = false
  }
  next()
}
