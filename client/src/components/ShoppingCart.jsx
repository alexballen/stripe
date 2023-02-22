import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allShoppingCart,
  decreaseShoppingCart,
  removeProductShoppingCart,
  cleanShoppingCart,
  editShoppingCart,
} from "../redux/actions/shoppingCart.js";
import Stripe from "./Stripe";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const total = cart.map((pre) => pre.precio);
  const cantidadTotal = cart.map((cant) => cant.cantidad);

  const suma = (arr1, arr2) => {
    const sumaTotal = [];
    for (let i = 0; i < arr1.length; i++) {
      sumaTotal[i] = arr1[i] * arr2[i];
    }
    return sumaTotal;
  };

  //const [totalCompra, setTotalCompra] = useState(null);

  useEffect(() => {
    dispatch(allShoppingCart());
  }, [dispatch]);

  const handleMas = (id) => {
    dispatch(editShoppingCart(id, { num: 1, add: true }));
  };

  const handleMenos = (id) => {
    dispatch(decreaseShoppingCart(id, { num: 1, add: false }));
  };

  const handleBorrarProducto = (id) => {
    dispatch(removeProductShoppingCart(id));
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

  /* const handleCompraParcial = (id) => {
    //const itemProduct = carrito.filter((e) => e.id === id);
    //const totaltems = itemProduct.map((p) => p.precio);
    //const sumaTotalItemas = totaltems.reduce((a, c) => a + c);
    //setTotalCompra(sumaTotalItemas);
    //alert(`Valor de su compra: ${sumaTotalItemas}`);
    document.getElementById("flotante").className =
      "container visible border border-primary mb-5";
  }; */

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
          {cart?.map((e, i) => {
            return (
              <tbody key={i}>
                <tr className="table-primary">
                  <th scope="row">{i + 1}</th>
                  <td>{e.nombre}</td>
                  <td>{e.precio}</td>
                  <td>{e.descripcion}</td>
                  <td>
                    <button onClick={() => handleMenos(e.id)}>-</button>
                    <button>{e.cantidad}</button>
                    <button onClick={() => handleMas(e.id)}>+</button>
                  </td>
                  <td>
                    <button /* onClick={() => handleCompraParcial(e.id)} */>
                      Comprar {e.precio * e.cantidad}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleBorrarProducto(e.id)}>
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
                  ? suma(total, cantidadTotal).reduce((a, b) => a + b)
                  : 0}
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
