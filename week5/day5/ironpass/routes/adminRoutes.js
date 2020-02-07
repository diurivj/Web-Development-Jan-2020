const { Router } = require("express");
const {
  createConcertView,
  createConcert
} = require("../controllers/concertsControllers");
const updateConfig = require("../config/cloudinary");

const router = Router();

router.get("/create-concert", createConcertView);
router.post("/create-concert", updateConfig.single("cartel"), createConcert);

module.exports = router;
