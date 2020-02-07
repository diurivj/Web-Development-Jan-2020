const express = require("express");
const router = express.Router();
const { profile } = require("../controllers/authControllers");
const { isAuth } = require("../middlewares");
const {
  showConcerts,
  buyTicket
} = require("../controllers/concertsControllers");

/* GET home page */
router.get("/", showConcerts);

router.get("/profile", isAuth, profile);

router.get("/buy-ticket/:concertID", isAuth, buyTicket);

module.exports = router;
