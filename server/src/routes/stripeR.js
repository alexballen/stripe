const { Router } = require("express");
const { postStripe } = require("../controler/stripeC.js");

const router = Router();

router.post("/", postStripe);

module.exports = router;
