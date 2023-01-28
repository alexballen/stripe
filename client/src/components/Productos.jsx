import React, { useState } from "react";
import db from "../db/db.js";

const Productos = () => {
  const [carrito, setCarrito] = useState([]);

  const handleAgregar = (e) => {
    e.preventDefault();
    const num = e.target.value;
    const prodCar = db.filter((e) => e.id == num);
    setCarrito([...carrito, ...prodCar]);
  };

  const total = carrito.map((t) => t.precio);

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
            </tr>
          </thead>
          {carrito &&
            carrito?.map((e, i) => {
              return (
                <tbody key={i}>
                  <tr className="table-primary">
                    <th scope="row">{e.id}</th>
                    <td>{e.nombre}</td>
                    <td>{e.precio}</td>
                    <td>{e.descripcion}</td>
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
