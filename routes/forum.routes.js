// Se implementa el enrutador de express

// const router = require("express").Router();

const { Router } = require("express");
const {
  createPost,
  readPosts,
  updatePost,
  deletePost,
} = require("../controllers/forum.controllers");
const router = Router();

//====================================
//                      Rutas para Renderizar Vistas
//====================================

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

//====================================
//                      Rutas para CRUD de Posts
//====================================

// Crear nueva publicación (CREATE)
router.post("/post", createPost);

// Obtener todas las publicaciones (READ)
router.get("/posts", readPosts);

// Actualizar una publicación (UPDATE)
router.put("/post/:id", updatePost);

// Eliminar una publicación (DELETE)
router.delete("/post/:id", deletePost);

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
