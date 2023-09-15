// Se implementa el enrutador de express
// const router = require("express").Router();

const { Router } = require("express");
const router = Router();

router.get("/home", (req, res) => {
  res.render("home");
});

router.post("/usuario/", (req, res) => {
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

module.exports = router;
