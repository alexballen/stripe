const { Router } = require("express");
const { postStripe } = require("../controler/index.js");

const router = Router();

router.post("/api/pagos", postStripe);

module.exports = router;
