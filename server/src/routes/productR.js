const { Router } = require("express");
const { getProduct } = require("../controler/productC.js");

const router = Router();

router.get("/", getProduct);

module.exports = router;
