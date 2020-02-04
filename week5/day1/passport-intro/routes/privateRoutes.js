const { Router } = require("express");
const { ultraSecret } = require("../controllers/privateControllers");
const router = Router();

router.get("/ultra-secret-sht", ultraSecret);

module.exports = router;
