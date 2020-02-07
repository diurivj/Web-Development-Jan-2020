const { Router } = require("express");
const { addCredits, creditsView } = require("../controllers/creditsController");
const router = Router();

router.get("/", creditsView).post("/", addCredits);

module.exports = router;
