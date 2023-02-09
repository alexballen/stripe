const { Router } = require("express");
const { postStripe } = require("../controler/index.js");
const cartR = require("./cartR.js");

const router = Router();

router.post("/api/pagos", postStripe);
router.use("/post", cartR);

module.exports = router;
