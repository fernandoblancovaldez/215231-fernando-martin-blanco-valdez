const { Sequelize, DataTypes } = require("sequelize");

// instancia de conexion a la base de datos
const sequelize = new Sequelize("pruebadb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
  Sequelize,
  DataTypes,
};
