import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductsCart,
  addProductShoppingCart,
  decreaseProductShoppingCart,
  removeProductShoppingCart,
  cleanShoppingCart,
} from "../redux/actions/shoppingCart.js";
import Stripe from "./Stripe";
import FormClient from "./FormClient.jsx";
import SumCartItems from "./SumCartItems.jsx";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const total = cart.map((product) => product.precio);
  const cantidadTotal = cart.map((product) => product.cantidad);

  const [totalCompra, setTotalCompra] = useState(null);

  useEffect(() => {
    dispatch(allProductsCart());
  }, [dispatch]);

  const handleMas = (id) => {
    dispatch(addProductShoppingCart(id, { quantity: 1, add: true }));
  };

  const handleMenos = (id) => {
    dispatch(decreaseProductShoppingCart(id, { quantity: 1, add: false }));
  };

  const handleBorrarProducto = (id) => {
    dispatch(removeProductShoppingCart(id));
    document.getElementById("flotante").className = "invisible";
    document.getElementById("flotanteDos").className = "invisible";
  };

  const handleVaciarCarrito = () => {
    dispatch(cleanShoppingCart());
    document.getElementById("flotante").className = "invisible";
    document.getElementById("flotanteDos").className = "invisible";
  };

  const handleCompraParcial = (total) => {
    setTotalCompra(total);
    // alert(`Valor de su compra: ${sumaTotalItemas}`);
    document.getElementById("flotante").className = "visible";
    document.getElementById("flotanteDos").className = "visible";
  };

  //"container visible border border-primary mb-5"

  const handleCompraTotal = (total) => {
    setTotalCompra(total.reduce((a, c) => a + c));
    //alert(`Valor de su compra: ${total.reduce((a, c) => a + c)}`);
    document.getElementById("flotante").className = "visible";
    document.getElementById("flotanteDos").className = "visible";
  };

  return (
    <div>
      <h1>ShoppingCart</h1>
      <div className="m-5">
        <table className="table table-hover border">
          <thead>
            <tr>
              <th scope="col">Unds</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Comprar Und</th>
              <th scope="col">Borrar producto</th>
            </tr>
          </thead>
          {cart?.map((product, i) => {
            return (
              <tbody key={i}>
                <tr className="table-primary">
                  <th scope="row">{i + 1}</th>
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
                  <td>{product.descripcion}</td>
                  <td>
                    <button onClick={() => handleMenos(product.id)}>-</button>
                    <button>{product.cantidad}</button>
                    <button onClick={() => handleMas(product.id)}>+</button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleCompraParcial(product.precio * product.cantidad)
                      }
                    >
                      Comprar {product.precio * product.cantidad}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleBorrarProducto(product.id)}>
                      Borrar
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Total</th>
              <th scope="col">
                {cart.length > 0
                  ? SumCartItems(total, cantidadTotal).reduce((a, b) => a + b)
                  : 0}
              </th>
              <th scope="col">
                <button
                  onClick={() =>
                    handleCompraTotal(SumCartItems(total, cantidadTotal))
                  }
                >
                  Comprar Todo
                </button>
              </th>
              <th></th>
              <th>
                <button onClick={() => handleVaciarCarrito()}>
                  Vaciar Carrito
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div id="flotante" className="invisible">
        <FormClient />
      </div>
      <div id="flotanteDos" className="invisible">
        <Stripe precio={totalCompra} />
      </div>
    </div>
  );
};

export default ShoppingCart;
