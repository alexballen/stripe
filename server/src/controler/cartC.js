const { Cart } = require("../db");

const getCart = async (req, res) => {
  try {
    const allCart = await Cart.findAll();
    res.status(200).json(allCart);
  } catch (error) {
    console.log({ message: error });
  }
};

const postCart = async (req, res) => {
  const data = req.body;
  try {
    if (data) {
      const dt = await Cart.create({
        id: data.id,
        ref: data.ref,
        nombre: data.nombre,
        precio: data.precio,
        cantidad: data.cantidad,
        descripcion: data.descripcion,
      });
      res.status(200).json(dt);
    }
  } catch (error) {
    console.log({ message: error });
  }
};

const quantityCart = async (req, res) => {
  const { id } = req.params;
  const { num } = req.body;
  try {
    const existingCart = await Cart.findByPk(id);
    if (existingCart) {
      if (num) {
        existingCart.cantidad = existingCart.cantidad + num;
      }
      await existingCart.save();
    }
    res.status(200).json(existingCart);
  } catch (error) {
    console.log({ message: error.message });
  }
};

const delItemCart = async (req, res) => {
  const data = req.body;
  try {
    await Cart.destroy({
      where: {
        id: data.id,
      },
    });
    res.status(204).json("Menos un items del carrito");
  } catch (error) {
    console.log({ message: error });
  }
};

const delProductCart = async (req, res) => {
  const data = req.body;
  try {
    await Cart.destroy({
      where: {
        ref: data.ref,
      },
    });
    res.status(204).json("Producto eliminado con exito del carrito");
  } catch (error) {
    console.log({ message: error });
  }
};

const delCart = async (req, res) => {
  try {
    await Cart.destroy({
      where: {},
      truncate: true,
    });
    res.status(204).json("Carrito vaciado");
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = {
  getCart,
  postCart,
  delItemCart,
  delProductCart,
  delCart,
  quantityCart,
};
