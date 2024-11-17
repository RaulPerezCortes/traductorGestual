//otra opción es hacer que el div container sea siempre igual, con una escala de 16:9
document
  .getElementById("canvasHeight")
  .addEventListener("input", ajustarTamanio);

function ajustarTamanio() {
  const canvasHeight = parseInt(document.getElementById("canvasHeight").value);
  const canvasWidth = (16 / 9) * canvasHeight;

  envolver.style.width = canvasWidth + "px";
  envolver.style.height = canvasHeight + "px";
}

function iniciarPrograma() {
  // Obtener el tamaño más pequeño entre canvasWidth y canvasHeight
  const canvasHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const canvasWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const minTamanio = Math.min(canvasWidth, canvasHeight);

  // Calcular el 90% del tamaño más pequeño
  const nuevoTamanio = minTamanio * 0.9;

  // Establecer el tamaño de los elementos
  envolver.style.width = nuevoTamanio + "px";
  envolver.style.height = (9 / 16) * nuevoTamanio + "px";
}

// Llamar a la función al iniciar el programa
iniciarPrograma();
