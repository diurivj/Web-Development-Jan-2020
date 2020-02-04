const passport = require("passport");
const User = require("../models/User");
const slackStrategy = require("passport-slack").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(User.createStrategy());

// serialize pone en contexto el id de nuestro usuario
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });              │
//                │
//                │
//                └─────────────────┬──→ saved to session
//                                  │    req.session.passport.user = {id: '..'}
//                                  │
// deserialize toma el id de serialize y busca a nuestro usuario en la base de datos,
// despues lo coloca completo en req.user
//                                  ↓
// passport.deserializeUser(function(id, done) {
//                  ┌───────────────┘
//                  │
//                  ↓
//   User.findById(id, function(err, user) {
//       done(err, user);
//   });            └──────────────→ user object attaches to the request as req.user
// });

// SI utilizamos PLM y otras estrategias, necesitamos serializar y deserializar a manita.
passport.serializeUser(function(user, done) {
  //Mantenemos en contexto el id de nuestro usuario, es más fácil guardar solo el id que todo el objeto
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  // Usamos el id que nos envia serializeUser y extraemos el usuario de la base de datos
  User.findById(id, function(err, user) {
    done(err, user); // colocamos a este usuario en req.user
  });
});

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// SLACK 👇

passport.use(
  new slackStrategy(
    {
      clientID: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
      callbackURL: "/auth/slack/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // Si el usuario ya existe en la base de datos, inicia sesion
      const user = await User.findOne({ slackID: profile.id });
      if (user) {
        return done(null, user);
      }
      // Si el usuario, no existe, lo creamos e iniciamos sesión
      const newUser = await User.create({
        slackID: profile.id,
        name: profile.displayName,
        email: profile.user.email
      });
      return done(null, newUser);
    }
  )
);

// Google 👇
passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async (_, __, profile, done) => {
      console.log("profile:", profile);
      const user = await User.findOne({ googleID: profile.id });
      if (user) {
        user.image = profile._json.picture;
        await user.save();
        return done(null, user);
      }
      const newUser = await User.create({
        googleID: profile.id,
        name: profile.displayName,
        email: profile._json.email,
        image: profile._json.picture
      });
      done(null, newUser);
    }
  )
);

module.exports = passport;
