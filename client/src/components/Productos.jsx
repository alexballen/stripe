import React, { useState } from "react";
import db from "../db/db.js";

const Productos = () => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState([]);

  const handleAgregar = (e) => {
    e.preventDefault();
    const num = e.target.value;
    const prodCar = db.filter((e) => e.id == num);
    setCarrito([...carrito, ...prodCar]);
  };

  const acumulado = carrito.map((i) => i.id);

  const carritoUnicos = [...new Set([...carrito])];

  const total = carrito.map((t) => t.precio);

  const handleMas = (e) => {
    e.preventDefault();
    setCantidad([...cantidad, Number(...e.target.value)]);
  };

  const handleMenos = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Productos</h1>
        {db?.map((e, i) => {
          return (
            <div
              key={i}
              className="card bg-secondary mb-3 col-md-4 offset-md-4 "
            >
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
                value={e.id}
                onClick={(e) => handleAgregar(e)}
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
            </tr>
          </thead>
          {carritoUnicos &&
            carritoUnicos?.map((e, i) => {
              return (
                <tbody key={i}>
                  <tr className="table-primary">
                    <th scope="row">{e.id}</th>
                    <td>{e.nombre}</td>
                    <td>{e.precio}</td>
                    <td>{e.descripcion}</td>
                    <td>
                      <button value={e.id} onClick={(e) => handleMenos(e)}>
                        -
                      </button>
                      <button>
                        {
                          acumulado.concat(cantidad).filter((i) => i === e.id)
                            .length
                        }
                      </button>
                      <button value={e.id} onClick={(e) => handleMas(e)}>
                        +
                      </button>
                    </td>
                    <td>
                      <button>Comprar</button>
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
                <button>Comprar Todo</button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Productos;
