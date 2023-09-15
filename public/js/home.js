const formGuardar = document.querySelector("#form-guardar");
formGuardar.addEventListener("submit", (e) => {
  e.preventDefault();

  //se capturan los datos del formulario
  const inputTitulo = document.querySelector("#titulo-post").value,
    inputDetalle = document.querySelector("#detalle-post").value;

  console.log(inputTitulo, inputDetalle);
});
