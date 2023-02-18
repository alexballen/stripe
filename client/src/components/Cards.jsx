import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addShoppingCart,
  addShoppingCartIcon,
} from "../redux/actions/shoppingCart.js";
import { getAllProducts } from "../redux/actions/products.js";

const Cards = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
    return () => {
      dispatch(getAllProducts());
    };
  }, [dispatch]);

  const handleAgregar = (ref) => {
    const addCart = products.filter((e) => e.ref === ref);
    dispatch(addShoppingCart(addCart[0]));
    setCarrito([...carrito, ...addCart]);
    dispatch(addShoppingCartIcon(carrito.length + 1));
  };

  return (
    <div className="border border-primary h-100 d-flex w-100 p-3 overflow-auto">
      {products &&
        products?.map((e, i) => {
          return (
            <div key={i} className="card bg-secondary m-3 col-md-4">
              <div className="card-header">
                <h3>{e.nombre}</h3>
              </div>
              <div className="card-body ">
                <h3>{`Id: ${e.id}`}</h3>
                <h3>{`Precio: ${e.precio}`}</h3>
                <h3 className="card-text">{e.descripcion}</h3>
              </div>
              <button className="btn btn-success">Comprar ahora</button>
              <button
                onClick={() => handleAgregar(e.ref)}
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
