const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  });
};
