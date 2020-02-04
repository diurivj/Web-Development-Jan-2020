exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
};

exports.checkRole = role => (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === role) {
    next();
  } else {
    res.redirect("/");
  }
};
