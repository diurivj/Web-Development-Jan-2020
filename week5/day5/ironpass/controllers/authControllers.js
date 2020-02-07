const User = require("../models/User");

exports.signupView = (req, res) => {
  res.render("auth/signup");
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const { secure_url } = req.file;

  //1. verificar que no nos llegue algo vacio
  if (name === "" || email === "" || !secure_url) {
    res.render("auth/signup", { message: "Invalid credentials" });
  }
  //2. verificar que el usuario no exista
  const user = await User.findOne({ email });
  if (user) {
    res.render("auth/signup", { message: "Email already in use" });
  }
  //3. registrar al usuario
  const newUser = await User.register(
    { name, email, photo: secure_url },
    password
  );
  console.log(newUser);
  res.redirect("/auth/login");
};

exports.loginView = (req, res) => {
  res.render("auth/login");
};

exports.logout = (req, res) => {};

exports.profile = (req, res) => {
  res.render("profile", { user: req.user });
};
