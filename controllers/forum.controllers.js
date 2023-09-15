const ctrl = {};
const Posts = require("../models/posts.js");

// Crear nueva publicación (CREATE)
ctrl.createPost = async (req, res) => {
  try {
    // recibir datos por body y guardarlos en la base de datos creando una nuev publicación
    const post = await Posts.create(req.body);
    res.send({ msg: "publicación creada con éxito", post });
  } catch (err) {
    console.log(err);
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
  }
};

module.exports = ctrl;
