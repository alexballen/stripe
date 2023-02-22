const { Cart } = require("../db");

const getCartProducts = async (req, res) => {
  try {
    const searchProductsCart = await Cart.findAll();
    res.status(200).json(searchProductsCart);
  } catch (error) {
    console.log({ message: error });
  }
};

const addCartProduct = async (req, res) => {
  const { id } = req.params;
  const { data, num, add } = req.body;
  try {
    const existsProduct = await Cart.findByPk(id);
    if (existsProduct) {
      if (num) {
        if (add === true) {
          existsProduct.cantidad = existsProduct.cantidad + num;
        }
        await existsProduct.save();
      }
    } else {
      if (data) {
        const createInDb = await Cart.create({
          id: data.id,
          ref: data.ref,
          nombre: data.nombre,
          precio: data.precio,
          cantidad: data.cantidad,
          descripcion: data.descripcion,
        });
        createInDb.cantidad = createInDb.cantidad + num;
        await createInDb.save();
        res.status(200).json(createInDb);
      }
    }
  } catch (error) {
    console.log({ message: error });
  }
};

const quantityCart = async (req, res) => {
  const { id } = req.params;
  const { num, add } = req.body;
  try {
    const existsProduct = await Cart.findByPk(id);
    if (existsProduct) {
      if (num) {
        if (add === true) {
          existsProduct.cantidad = existsProduct.cantidad + num;
        } else {
          if (existsProduct.cantidad === 1) {
            await Cart.destroy({
              where: {
                id: id,
              },
            });
          } else {
            existsProduct.cantidad = existsProduct.cantidad - num;
          }
        }
        await existsProduct.save();
      }
    }
    res.status(200).json(existsProduct);
  } catch (error) {
    console.log({ message: error.message });
  }
};

const deleteCartProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.destroy({
      where: {
        id,
      },
    });
    res.status(204).json("Producto eliminado con exito del carrito");
  } catch (error) {
    console.log({ message: error });
  }
};

const cleanCart = async (req, res) => {
  try {
    const existsProducts = await Cart.findAll();
    console.log(existsProducts);
    if (existsProducts.length !== 0) {
      await Cart.destroy({
        where: {},
        truncate: true,
      });
      return res
        .status(204)
        .json("Se eliminaron todos los productos del carrito");
    } else {
      return res.status(204).json("No hay productos para eliminar");
    }
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = {
  getCartProducts,
  addCartProduct,
  quantityCart,
  deleteCartProduct,
  cleanCart,
};
