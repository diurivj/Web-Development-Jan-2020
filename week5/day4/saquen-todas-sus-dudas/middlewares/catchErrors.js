exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(err => {
      if (err.name === 'UserExistsError') {
        res.render('index', { err: err.message })
      }
      next(err)
    })
  }
}

exports.catchError = fn => (req, res, next) => fn(req, res, next).catch(next)
