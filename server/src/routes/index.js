const { Router } = require("express");
const { postStripe } = require("../controler/index.js");
const cartR = require("./cartR.js");
const productR = require("./productR.js");

const router = Router();

router.post("/api/pagos", postStripe);
router.use("/cart", cartR);
router.use("/product", productR);

module.exports = router;
