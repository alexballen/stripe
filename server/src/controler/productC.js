const db = require("../db/db.js");
const { Products } = require("../db.js");

const getProduct = async (req, res) => {
  try {
    const dbLocal = db;
    const exists = await Products.findAll();
    if (exists.length === 0) {
      await Products.bulkCreate(dbLocal);
    }
    const dbServer = await Products.findAll();
    res.status(200).json(dbServer);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProduct,
};
