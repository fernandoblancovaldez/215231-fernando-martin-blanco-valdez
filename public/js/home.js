const formGuardar = document.querySelector("#form-guardar");

formGuardar.addEventListener("submit", async (e) => {
  e.preventDefault();

  //se capturan los datos del formulario
  const title = document.querySelector("#titulo-post").value,
    content = document.querySelector("#detalle-post").value,
    imgUrl = document.querySelector("#imgUrl-post").value;

  //se envian datos al servidor
  try {
    const res = await fetch("/post", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, imgUrl }),
    });
    const data = await res.json();
    console.log(data.msg);
  } catch (err) {
    console.log(err);
  }

  document.querySelector("#titulo-post").value = "";
  document.querySelector("#detalle-post").value = "";
});
