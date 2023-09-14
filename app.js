const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//Middlewares
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.post("/usuario/", (req, res) => {
  res.send(req.query);
});
/*

app.post("/usuario/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

  app.post("/nuevo-usuario", (req, res) => {
  const data = req.body;
  res.send(data);
}); 

es decir, las maneras de recibir datos son
req.body
req.params
req.query

*/

app.listen(3000, console.log("Servidor en http://localhost:3000"));
