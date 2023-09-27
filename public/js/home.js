//ésta funcion sirve para hacer la peticion fetch get a nuestro endpoint "posts" y traer lo que haya en la bbdd
const readPosts = async () => {
  try {
    const res = await fetch("posts");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al cargar la lista de posteos" });
  }
};

//ésta funcion sirve para renderizar dinamicamente los elementos que se traigan de la bbdd
const showPosts = (posts, htmlElement) => {
  let regs = "";
  //método para recorrer los regs
  posts.forEach((post) => {
    regs += `
    <section class="col col-auto">
        <div class="card" style="width: 18rem;">
            <img src="${post.img_url}" class="card-img-top" alt="${post.title}" style={{objectFit: "contain"}}>
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text mb-1">${post.content}</p>
                <p class="card-text text-muted mb-1 fs-6">${post.date}</p>
                <div class="btn-group" role="group" >
                    <a href="/admin/${post.id}" class="btn btn-primary">Actualizar</a>
                    <button type="button" class="btn btn-danger del-btn" data-id="${post.id}">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    </section>    
    `;
  });
  // console.log(regs);

  //Se crea la lista
  htmlElement.innerHTML = regs;
};

//esta función sirve para eliminar los elementos de la base de datos a partir del id que se les asigne dinámicamente
const delPost = async (id) => {
  console.log(`Eliminando el Post con id=${id}`);
  try {
    const res = await fetch(`/post/${id}`, {
      method: "delete",
    });
    const data = await res.json();
    //console.log(data.msg);

    alert(data.msg || "Eliminación realizada con éxito !");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al eliminar el Post" });
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const posts = await readPosts();
    //console.log(posts);

    // Modificar el dom para mostrar los Posteos
    const main = document.querySelector("#posts-list");
    showPosts(posts, main);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al cargar la lista de posteos" });
  }
});

document.addEventListener("click", async (e) => {
  if (e.target.matches(".del-btn")) {
    e.preventDefault();
    const id = e.target.dataset.id;
    try {
      //llamo la funcion que elimina el post que corresponda con el id del elemento que desencadenó el evento "click"
      await delPost(id);
      const posts = await readPosts();
      //console.log(posts);

      // Modificar el dom para mostrar los Posteos
      const main = document.querySelector("#posts-list");
      showPosts(posts, main);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: err.message || "Error al cargar la lista de posteos" });
    }
  }
});
