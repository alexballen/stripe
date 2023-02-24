import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductsCart,
  addProductShoppingCart,
  postShoppingCart,
  addToShoppingCartIcon,
} from "../redux/actions/shoppingCart.js";
import { getAllProducts } from "../redux/actions/products.js";

const Cards = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);

  const [quantityCart, setQuantityCart] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(allProductsCart());
  }, [dispatch]);

  const handleAddproduct = (ref, id) => {
    const fetchProduct = products.filter((product) => product.ref === ref);
    const fetchCart = cart.filter((product) => product.ref === ref);
    if (fetchCart.length === 0) {
      dispatch(
        postShoppingCart(id, { data: fetchProduct[0], quantity: 1, add: true })
      ).then(() => {
        dispatch(allProductsCart());
      });
    } else {
      dispatch(addProductShoppingCart(id, { quantity: 1, add: true }));
    }
    setQuantityCart(quantityCart + 1);
    dispatch(addToShoppingCartIcon(quantityCart));
  };

  return (
    <div className="border border-primary h-100 d-flex w-100 p-3 overflow-auto">
      {products &&
        products?.map((product, i) => {
          return (
            <div key={i} className="card bg-secondary m-3 col-md-4">
              <div className="card-header">
                <h3>{product.nombre}</h3>
              </div>
              <div className="card-body ">
                <h3>{`Id: ${product.id}`}</h3>
                <h3>{`Precio: ${product.precio}`}</h3>
                <h3 className="card-text">{product.descripcion}</h3>
              </div>
              <button className="btn btn-success">Comprar ahora</button>
              <button
                onClick={() => handleAddproduct(product.ref, product.id)}
                className="btn btn-info"
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
