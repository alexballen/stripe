import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/actions/products.js";
import {
  addShoppingCart,
  /* allShoppingCart, */
} from "../redux/actions/shoppingCart.js";
import db from "../db/db.js";
import Stripe from "./Stripe";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const { addCartS } = useSelector((state) => state.addCartS);
  console.log(addCartS);
  const { cartP } = useSelector((state) => state.cartP);
  console.log(cartP);

  useEffect(() => {
    dispatch(allProducts(db));
    //dispatch(allShoppingCart());
  }, []);

  const [carrito, setCarrito] = useState([]);
  const [totalCompra, setTotalCompra] = useState(null);

  const handleAgregar = (id) => {
    const addCart = products.filter((e) => e.id === id);
    dispatch(addShoppingCart(addCart[0]));
    localStorage.setItem("addPro", addCartS);
    setCarrito([...carrito, ...addCart]);
  };

  carrito.sort((a, b) => (a.id > b.id ? 1 : -1));

  const carritoSinDuplicados = [...new Set([...carrito])];

  const total = carrito.map((p) => p.precio);

  const handleMas = (producto) => {
    const filtCarr = carrito.filter((item) => item.id === producto.id);
    filtCarr.push(producto);
    const filtCarrTod = carrito.filter((item) => item.id !== producto.id);
    const carArmado = filtCarrTod.concat(filtCarr);
    setCarrito(carArmado);
  };

  const handleMenos = (id) => {
    const filtCarr = carrito.filter((item) => item.id === id);
    filtCarr.shift();
    const filtCarrTod = carrito.filter((item) => item.id !== id);
    const carArmado = filtCarrTod.concat(filtCarr);
    setCarrito(carArmado);
  };

  const handleVaciarCarrito = () => {
    setCarrito([]);
  };

  const handleBorrarProducto = (id) => {
    const borrarProduc = carrito.filter((e) => e.id !== id);
    setCarrito([...borrarProduc]);
  };

  const handleCompraTotal = () => {
    setTotalCompra(total.reduce((a, c) => a + c));
    alert(`Valor de su compra: ${total.reduce((a, c) => a + c)}`);
    document.getElementById("flotante").className =
      "container visible border border-primary mb-5";
  };

  const handleCompraParcial = (id) => {
    const itemProduct = carrito.filter((e) => e.id === id);
    const totaltems = itemProduct.map((p) => p.precio);
    const sumaTotalItemas = totaltems.reduce((a, c) => a + c);
    setTotalCompra(sumaTotalItemas);
    alert(`Valor de su compra: ${sumaTotalItemas}`);
    document.getElementById("flotante").className =
      "container visible border border-primary mb-5";
  };

  return (
    <div>
      <div className="mt-5">
        <button type="button" className="btn btn-primary position-relative">
          Carrito
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carrito.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <h1>Productos</h1>
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
                  onClick={() => handleAgregar(e.id)}
                  className="btn btn-info"
                >
                  Agregar al carrito
                </button>
              </div>
            );
          })}
      </div>
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
          {carritoSinDuplicados &&
            carritoSinDuplicados?.map((e, i) => {
              return (
                <tbody key={i}>
                  <tr className="table-primary">
                    <th scope="row">{e.id}</th>
                    <td>{e.nombre}</td>
                    <td>{e.precio}</td>
                    <td>{e.descripcion}</td>
                    <td>
                      <button onClick={() => handleMenos(e.id)}>-</button>
                      <button>
                        {carrito.filter((i) => i.id === e.id).length}
                      </button>
                      <button onClick={() => handleMas(e)}>+</button>
                    </td>
                    <td>
                      <button onClick={() => handleCompraParcial(e.id)}>
                        Comprar
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
                {total.length > 0 ? total.reduce((a, c) => a + c) : 0}
              </th>
              <th scope="col">
                <button onClick={handleCompraTotal}>Comprar Todo</button>
              </th>
              <th></th>
              <th>
                <button onClick={handleVaciarCarrito}>Vaciar Carrito</button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <h1>Datos Cliente</h1>
        <div
          id="flotante"
          className="container invisible border border-primary mb-5"
        >
          <form className="row g-3 mt-3">
            <div className="col-6">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="nombre"
              />
            </div>
            <div className="col-6">
              <label htmlFor="pais" className="form-label">
                Pais
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="pais"
              />
            </div>
            <div className="col-6">
              <label htmlFor="ciudad" className="form-label">
                Ciudad
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="ciudad"
              />
            </div>
            <div className="col-6">
              <label htmlFor="barrio" className="form-label">
                Barrio
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                id="barrio"
              />
            </div>
            <label>Direccion</label>
            <div className="row">
              <div className="col-4">
                <select defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled>
                    Seleccione
                  </option>
                  <option>Calle</option>
                  <option>Avenida</option>
                </select>
                <input type="text" />
              </div>
              <div className="col-4">
                <select defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled>
                    Seleccione
                  </option>
                  <option>Calle</option>
                  <option>Avenida</option>
                </select>
                <input type="text" />
              </div>
              <div className="col-4 mb-3">
                <label>Numero</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Stripe precio={totalCompra} />
      </div>
    </div>
  );
};

export default Products;