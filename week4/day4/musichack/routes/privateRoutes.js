const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Ke paso patroncito");
});
router.get("/info", (req, res) => {
  res.send("Ke paso patroncito");
});

module.exports = router;
