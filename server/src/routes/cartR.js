const { Router } = require("express");
const { getCart, postCart } = require("../controler/cartC.js");

const router = Router();

router.get("/", getCart);
router.post("/", postCart);

module.exports = router;
