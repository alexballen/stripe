const { Cart } = require("../db");

const getCart = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const postCart = async (req, res) => {
  //const { id, nombre, precio, descripcion } = req.body;
  const { id, nombre, precio, descripcion } = req.body;
  console.log(id);
  res.send("Correcto envio" + nombre);
  try {
    /* const activCreated = await Activities.create({
      id,
      nombre,
      precio,
      descripcion,
    }); */
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = {
  getCart,
  postCart,
};
