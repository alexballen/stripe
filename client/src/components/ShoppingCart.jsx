import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allShoppingCart,
  addShoppingCart,
  decreaseShoppingCart,
  removeProductShoppingCart,
  cleanShoppingCart,
} from "../redux/actions/shoppingCart.js";
//import Stripe from "./Stripe";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { cant } = useSelector((state) => state.cant);
  console.log(cart.cantidad);

  //const { status } = useSelector((state) => state.status);
  //const { error } = useSelector((state) => state.error);

  const len = cant.length;
  const [num, setNum] = useState(len);
  console.log(len);

  const total = cant.map((p) => p.precio);
  //const [totalCompra, setTotalCompra] = useState(null);

  useEffect(() => {
    dispatch(allShoppingCart());
    /* if (cart.length === 0) {
    } */
  }, [dispatch]);

  /*  useEffect(() => {
    if (cant.length !== num) {
      dispatch(allShoppingCart());
    }
  }, [cant]); */

  const handleMas = (product) => {
    dispatch(allShoppingCart());
    dispatch(addShoppingCart(product));
    setNum(num + 1);
  };

  const handleMenos = (ref) => {
    const delItem = cant.filter((e) => e.ref === ref);
    dispatch(decreaseShoppingCart(delItem[0]));
    dispatch(allShoppingCart());
    setNum(num - 1);
  };

  const handleBorrarProducto = (ref) => {
    const delProduct = cant.filter((e) => e.ref === ref);
    dispatch(removeProductShoppingCart(delProduct[0]));
  };

  const handleVaciarCarrito = () => {
    dispatch(cleanShoppingCart());
  };

  /* const handleCompraTotal = () => {
    setTotalCompra(total.reduce((a, c) => a + c));
    alert(`Valor de su compra: ${total.reduce((a, c) => a + c)}`);
    document.getElementById("flotante").className =
      "container visible border border-primary mb-5";
  }; */

  const handleCompraParcial = (id) => {
    //const itemProduct = carrito.filter((e) => e.id === id);
    //const totaltems = itemProduct.map((p) => p.precio);
    //const sumaTotalItemas = totaltems.reduce((a, c) => a + c);
    //setTotalCompra(sumaTotalItemas);
    //alert(`Valor de su compra: ${sumaTotalItemas}`);
    document.getElementById("flotante").className =
      "container visible border border-primary mb-5";
  };

  /* if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>{error}</div>;
  } */
  return (
    <div>
      <h1>ShoppingCart</h1>
      <div className="m-5">
        <table className="table table-hover border">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Comprar Und</th>
              <th scope="col">Borrar producto</th>
            </tr>
          </thead>
          {cart &&
            cart?.map((e, i) => {
              return (
                <tbody key={i}>
                  <tr className="table-primary">
                    <th scope="row">{e.id}</th>
                    <td>{e.nombre}</td>
                    <td>{e.precio}</td>
                    <td>{e.descripcion}</td>
                    <td>
                      <button onClick={() => handleMenos(e.ref)}>-</button>
                      <button>{e.cantidad}</button>
                      <button onClick={() => handleMas(e)}>+</button>
                    </td>
                    <td>
                      <button /* onClick={() => handleCompraParcial(e.id)} */>
                        Comprar
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleBorrarProducto(e.ref)}>
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
                {total.length > 0 ? total.reduce((a, c) => a + c) : 0}
              </th>
              <th scope="col">
                <button /* onClick={handleCompraTotal} */>Comprar Todo</button>
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
      {/* <div>
        <Stripe precio={totalCompra} />
      </div> */}
    </div>
  );
};

export default ShoppingCart;
