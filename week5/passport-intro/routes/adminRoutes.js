const { Router } = require("express");
const { dashboardView } = require("../controllers/adminControllers");
const router = Router();

router.get("/dashboard", dashboardView);

module.exports = router;
