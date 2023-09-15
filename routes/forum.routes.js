// Se implementa el enrutador de express

// const router = require("express").Router();

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/new-post", (req, res) => {
  // recibir datos por body
  const { title, detail } = req.body;
  //se guardan los datos en la base de datos
  console.log(title, detail);
  return res.send({ msg: "Publicación guardada con éxito" });
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

module.exports = router;
