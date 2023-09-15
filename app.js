const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Conexion  a base de datos
const { sequelize } = require("./database");
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a base de datos exitosa");
  })
  .catch((err) =>
    console.log("Ocurrio un error al conectar con la base de datos", err)
  );

require("dotenv").config();
require("ejs");

// Inicialización
const app = express();

// Configuracion de Puerto
const port = process.env.PORT || 3000;

// Configuracion de Middlewares
app.use(
  cors(/* {
    origin: `http://localhost:${port}`,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  } */)
);
app.use(morgan("combined"));
app.use(express.json()); // Para que el servidor pueda comprender datos en formato Json

// Configuracion de Archivos Estáticos
app.use(express.static(path.join(__dirname, "public")));

//Motor de plantillas
app.set("view engine", "ejs");

// Configuración de Rutas
app.use(require("./routes/forum.routes"));

app.listen(port, console.log(`Servidor en http://localhost:${port}`));
