const { Router } = require("express");
const passport = require("../config/passport");
const uploadConfig = require("../config/cloudinary");

const {
  signupView,
  signup,
  loginView,
  logout
} = require("../controllers/authControllers");
const router = Router();

router
  .get("/signup", signupView)
  .post("/signup", uploadConfig.single("photo"), signup)
  .get("/login", loginView)
  .post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/profile",
      failureRedirect: "/login"
    })
  )
  .get("/logout", logout);

module.exports = router;
