const { Router } = require("express");
const { loadProduct } = require("../controler/productC.js");

const router = Router();

router.get("/", loadProduct);

module.exports = router;
