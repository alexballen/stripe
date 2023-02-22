import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../redux/actions/products.js";
import {
  allShoppingCart,
  editShoppingCart,
  postShoppingCart,
} from "../redux/actions/shoppingCart.js";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);

  const [carrito, setCarrito] = useState(0);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(allShoppingCart());
  }, [dispatch]);

  const handleAdd = (ref, id) => {
    const fetchProduct = products.filter((e) => e.ref === ref);
    const fetchCart = cart.filter((e) => e.ref === ref);
    if (fetchCart.length === 0) {
      dispatch(
        postShoppingCart(id, { data: fetchProduct[0], num: 1, add: true })
      ).then(() => {
        dispatch(allShoppingCart());
      });
    } else {
      dispatch(editShoppingCart(id, { num: 1, add: true }));
    }
    setCarrito(carrito + 1);
  };

  return (
    <div>
      {/* <ShoppingCartIcon /> */}
      <div className="mt-5">
        <Link to="/cart">
          <button type="button" className="btn btn-primary position-relative">
            Carrito
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carrito}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
      <h1>Productos</h1>
      {/* <Cards /> */}
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
                  onClick={() => handleAdd(e.ref, e.id)}
                  className="btn btn-info"
                >
                  Agregar al carrito
                </button>
              </div>
            );
          })}
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
    </div>
  );
};

export default Products;
