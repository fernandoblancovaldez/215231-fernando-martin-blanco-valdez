const ctrl = {};
const Posts = require("../models/posts.js");

// Crear nueva publicación (CREATE)
ctrl.createPost = async (req, res) => {
  try {
    // recibir datos por body y guardarlos en la base de datos creando una nuev publicación
    const post = await Posts.create(req.body);
    res.send({ msg: "Publicación creada con éxito", post });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al crear la nueva publicación" });
  }
};

// Obtener todas las publicaciones (READ)
ctrl.readPosts = async (req, res) => {
  try {
    // el metodo findall ingresa a la tabla y trae todos los elementos
    const posts = await Posts.findAll();
    //se retorna una respuesta con los datos procesados por el método json
    res.json(posts);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al leer los datos" });
  }
};

// Obtener una publicacion (READ)
ctrl.readPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Posts.findByPk(id); // el metodo findByPk trae el elemento que su primary key coincida con el valor ingresado, en éste caso el id
    res.json(post); //se retorna una respuesta con los datos procesados por el método json
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al leer los datos" });
  }
};

// Actualizar una publicación (UPDATE)
ctrl.updatePost = async (req, res) => {
  try {
    const { id } = req.params; //se trae y guarda en constante el parámetro "id"

    const post = await Posts.findByPk(id);
    post.set(req.body); //el metodo "set()" modifica el post encontrado por findByPk(id) con los datos recibidos por body
    await post.save(); // Con esta instrucción se guarda en la base de datos

    res.json({ msg: "Publicación actualizada correctamente" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al actualizar la publicación" });
  }
};

// Eliminar una publicación (DELETE)
ctrl.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await Posts.destroy({
      where: { id }, // el metodo destroy encuentra por id el post dentro de Posts y lo elimina
    });
    res.json({ msg: "Publicación eliminada correctamente" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al eliminar la publicación" });
  }
};

module.exports = ctrl;
