import React from "react";

const FormClient = () => {
  return (
    <div>
      <h1>Datos Cliente</h1>
      <div id="flotante" className="container border border-primary mb-5">
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
          <label>
            <h4> Direccion de envio</h4>
          </label>
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
  );
};

export default FormClient;
