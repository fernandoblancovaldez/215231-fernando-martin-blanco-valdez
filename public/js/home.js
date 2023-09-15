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
    <section>
        <div class="card" style="width: 18rem;">
            <img src="${post.img_url}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.content}</p>
                <p class="card-text text-muted">${post.date}</p>
                <div class="btn-group" role="group" >
                    <a href="/admin/${post.id}" class="btn btn-primary">Actualizar</a>
                    <button type="button" class="btn btn-danger onclick="delPost(${post.id})">
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

const delPost = (id) => {
  console.log(id);
};
