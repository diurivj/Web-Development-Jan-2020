exports.isLoggedIn = (req, res, next) => {
  // if (req.session.loggedUser) {
  //   next()
  // } else {
  //   res.redirect('/login')
  // }
  req.session.loggedUser ? next() : res.redirect('/login')
}
