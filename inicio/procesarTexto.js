document
  .getElementById("entradaTexto")
  .addEventListener("input", procesarTexto);

var textoProcesado;

function procesarTexto() {
  var entradaTexto = document.getElementById("entradaTexto").value;

  // Convertir a minúsculas y quitar signos de puntuación
  textoProcesado = entradaTexto
    .toLowerCase()
    .replace(/[.,\/#!$%^&*;:{}=\-_`()]/g, "")
    .replace(/[áäàâãåāă]/g, "a")
    .replace(/[éëèêēĕėę]/g, "e")
    .replace(/[íïìîīĭ]/g, "i")
    .replace(/[óöòôõōŏ]/g, "o")
    .replace(/[úüùûūŭ]/g, "u")
    .trim(); // Eliminar espacios innecesarios al principio o al final

  let resultado = eliminarPalabras(textoProcesado, palabrasTraducidas);

  // Mostrar el resultado
  document.getElementById("textoProcesado").innerText = resultado;
}

function resetEntradaTexto() {
  document.getElementById("entradaTexto").value = "";
  procesarTexto();
}

function eliminarPalabras(cadena, array) {
  const numPalabras = array.length;
  let palabrasEliminadas = 0;

  for (let i = 0; i < cadena.length && palabrasEliminadas < numPalabras; i++) {
    const palabraActual = array[palabrasEliminadas];

    if (cadena.startsWith(palabraActual)) {
      cadena = cadena.slice(palabraActual.length).trim();
      palabrasEliminadas++;
    } else {
      break; // Rompe el bucle si la palabra actual no coincide
    }
  }

  return cadena;
}
