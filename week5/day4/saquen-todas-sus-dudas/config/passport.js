const passport = require('passport')
const User = require('../models/User')

// esta configuracion solo se puede utilizar si estan en anabolicos, (PLM)

// estrategia local de PLM
passport.use(User.createStrategy())
// serializando al usuario
passport.serializeUser(User.serializeUser())
// deserializando al usuario
passport.deserializeUser(User.deserializeUser())

module.exports = passport
