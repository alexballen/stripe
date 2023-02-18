const { Router } = require("express");
const {
  getCart,
  postCart,
  delItemCart,
  delProductCart,
  delCart,
  quantityCart,
} = require("../controler/cartC.js");

const router = Router();

router.get("/", getCart);
router.post("/", postCart);
router.patch("/:id", quantityCart);
router.delete("/delitem", delItemCart);
router.delete("/delproduct", delProductCart);
router.delete("/delcart", delCart);

module.exports = router;
