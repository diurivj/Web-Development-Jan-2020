const User = require("../models/User");

exports.signupView = (req, res) => {
  res.render("auth/signup");
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/signup", {
      message: "seas mamon dame tu correo y contraseña"
    });
  }

  const userOnDB = await User.findOne({ email });
  if (userOnDB !== null) {
    res.render("auth/signup", { message: "El correo ya fue registrado" });
  }
  await User.register({ name, email }, password);
  res.redirect("/login");
};

exports.loginView = (req, res) => {
  res.render("auth/login", { message: req.flash("error") });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};
