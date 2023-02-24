const { Router } = require("express");
const cartR = require("./cartR.js");
const productR = require("./productR.js");
const stripeR = require("./stripeR");

const router = Router();

router.use("/pay", stripeR);
router.use("/cart", cartR);
router.use("/product", productR);

module.exports = router;
