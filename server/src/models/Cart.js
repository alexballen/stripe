const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cart", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    ref: {
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  });
};
