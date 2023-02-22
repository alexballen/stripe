const db = require("../db/db.js");
const { Products } = require("../db.js");

const loadProduct = async (req, res) => {
  try {
    const dbLocal = db;
    const existsProduct = await Products.findAll();
    if (existsProduct.length === 0) {
      await Products.bulkCreate(dbLocal);
    }
    const dbServer = await Products.findAll();
    res.status(200).json(dbServer);
  } catch (error) {
    console.log({ message: message.error });
  }
};

module.exports = {
  loadProduct,
};
