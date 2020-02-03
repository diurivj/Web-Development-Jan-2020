exports.ultraSecret = (req, res) => {
  res.render("secret/ultra-secret", { user: req.user });
};
