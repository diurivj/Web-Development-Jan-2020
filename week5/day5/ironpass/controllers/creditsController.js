const User = require("../models/User");

exports.addCredits = async (req, res) => {
  const { credits } = req.body;

  const user = await User.findOne({ _id: req.user.id });
  user.credits += Number(credits);
  await user.save();
  res.redirect("/profile");
};

exports.creditsView = (req, res) => {
  res.render("add-credits", { user: req.user });
};
