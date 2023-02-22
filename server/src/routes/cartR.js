const { Router } = require("express");
const {
  getCartProducts,
  addCartProduct,
  quantityCart,
  deleteCartProduct,
  cleanCart,
} = require("../controler/cartC.js");

const router = Router();

router.get("/", getCartProducts);
router.post("/:id", addCartProduct);
router.patch("/:id", quantityCart);
router.delete("/cleancart", cleanCart);
router.delete("/:id", deleteCartProduct);

module.exports = router;
