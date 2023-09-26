const formGuardar = document.querySelector("#form-guardar");

const readPost = async (id) => {
  try {
    const res = await fetch(`/post/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return err
      .status(500)
      .json({ msg: err.message || "Error al cargar la publicación" });
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const id = formGuardar.dataset.id;
  const post_title = document.querySelector(".h3");
  const post = await readPost(id);
  //console.log(post);

  const title = document.querySelector("#titulo-post"),
    content = document.querySelector("#detalle-post"),
    img_url = document.querySelector("#img-url-post"),
    date = document.querySelector("#date-post");

  post_title.innerHTML = `Editando ${post.title}`;
  title.value = post.title;
  content.value = post.content;
  img_url.value = post.img_url;
  date.value = post.date;
});

formGuardar.addEventListener("submit", async (e) => {
  e.preventDefault();

  //se capturan los datos del formulario
  const id = formGuardar.dataset.id,
    title = document.querySelector("#titulo-post").value,
    content = document.querySelector("#detalle-post").value,
    img_url = document.querySelector("#img-url-post").value,
    date = document.querySelector("#date-post").value;

  //console.log(id);

  //se envian datos al servidor
  try {
    const res = await fetch(`/post/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, img_url, date }),
    });
    const data = await res.json();
    //console.log(data.msg);

    alert(data.msg || "Actualización realizada con éxito !");
    location.href = "/";
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: err.message || "Error al crear el Post" });
  }

  document.querySelector("#titulo-post").value = "";
  document.querySelector("#detalle-post").value = "";
  document.querySelector("#img-url-post").value = "";
  document.querySelector("#date-post").value = "";
});
