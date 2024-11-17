function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cambiarPersona() {
  listaTextoProcesado = textoProcesado.split(" ");

  for (const elemento of listaTextoProcesado) {
    palabrasTraducidas.push(elemento);
    while (document.getElementById("tronco").firstChild) {
      document
        .getElementById("tronco")
        .removeChild(document.getElementById("tronco").firstChild);
    }

    for (var i = 0; i < elemento.length; i++) {
      var parrafo = document.createElement("p");
      const tamañoTronco = window
        .getComputedStyle(document.getElementById("tronco"))
        .getPropertyValue("width");
      parrafo.style.fontSize =
        (tamañoTronco.slice(0, -2) / elemento.length) * 2 + "px";
      parrafo.textContent = elemento[i];
      parrafo.id = "letra" + i;
      document.getElementById("tronco").appendChild(parrafo);
    }

    nuevaTransformacion = palabras.find((t) => t.referencia === elemento);
    if (nuevaTransformacion) {
      for (const signo of nuevaTransformacion.signos) {
        modificarPersona(signo);
        await sleep(1000);
      }
    } else {
      caracteres = elemento.split("");
      for (let i = 0; i < caracteres.length; i++) {
        const caracter = caracteres[i];
        document.getElementById("letra" + i).style.color = "#FCFC00";
        nuevaTransformacionLetra = abecedario.find(
          (t) => t.referencia === caracter
        );

        for (const signo of nuevaTransformacionLetra.signos) {
          modificarPersona(signo);
          await sleep(1000);
        }
      }
    }
    let resultado = eliminarPalabras(textoProcesado, palabrasTraducidas);

    // Mostrar el resultado
    document.getElementById("textoProcesado").innerText = resultado;
  }
}
