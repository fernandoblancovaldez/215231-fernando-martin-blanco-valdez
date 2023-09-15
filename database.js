const { Sequelize, DataTypes } = require("sequelize");

// instancia de conexion a la base de datos
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
  Sequelize,
  DataTypes,
};
