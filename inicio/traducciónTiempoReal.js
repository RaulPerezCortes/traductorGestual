const botonTiempoReal = document.getElementById("botonTiempoReal");
let tiempoRealActivado = false;
let palabrasTraducidas = [];
let intervaloTiempoReal;

botonTiempoReal.addEventListener("click", function () {
  tiempoRealActivado = !tiempoRealActivado;

  if (tiempoRealActivado) {
    botonTiempoReal.classList.add("activo");
    ejecutarCada2000ms();
  } else {
    botonTiempoReal.classList.remove("activo");
    detenerTiempoReal();
  }
});

function ejecutarCada2000ms() {
  cambiarPersonaTiempoReal().then(() => {
    intervaloTiempoReal = setTimeout(ejecutarCada2000ms, 100);
  });
}

function detenerTiempoReal() {
  clearTimeout(intervaloTiempoReal);
  palabrasTraducidas = [];
}

async function cambiarPersonaTiempoReal() {
  if (!textoProcesado || !tiempoRealActivado) {
    palabrasTraducidas = [];
    return;
  }

  listaTextoProcesado = textoProcesado.split(" ");

  // Eliminar palabras de palabrasTraducidas que no están en listaTextoProcesado
  palabrasTraducidas = palabrasTraducidas.filter((palabra) =>
    listaTextoProcesado.includes(palabra)
  );

  for (let i = 0; i < listaTextoProcesado.length; i++) {
    const elemento = listaTextoProcesado[i];

    if (elemento === palabrasTraducidas[i] || elemento == "") {
      continue;
    }

    await sleep(500);
    if (elemento != textoProcesado.split(" ")[i]) {
      return;
    }

    palabrasTraducidas.push(elemento);

    while (document.getElementById("tronco").firstChild) {
      document
        .getElementById("tronco")
        .removeChild(document.getElementById("tronco").firstChild);
    }

    for (let i = 0; i < elemento.length; i++) {
      const parrafo = document.createElement("p");
      parrafo.textContent = elemento[i];
      const tamañoTronco = window
        .getComputedStyle(document.getElementById("tronco"))
        .getPropertyValue("width");
      parrafo.style.fontSize =
        (tamañoTronco.slice(0, -2) / elemento.length) * 1.7 + "px";
      parrafo.id = "letra" + i;
      document.getElementById("tronco").appendChild(parrafo);
    }

    nuevaTransformacion = palabras.find((t) => t.referencia === elemento);
    if (nuevaTransformacion) {
      for (let i = 0; i < nuevaTransformacion.signos.length; i++) {
        const signo = nuevaTransformacion.signos[i];
        modificarPersona(signo);

        if (
          nuevaTransformacion.signos.length > 1 &&
          i < nuevaTransformacion.signos.length - 1
        ) {
          await sleep(1000);
        } else {
          await sleep(500);
        }
      }
    } else {
      caracteres = elemento.split("");
      for (let t = 0; t < caracteres.length; t++) {
        const caracter = caracteres[t];
        document.getElementById("letra" + t).style.color = "#FCFC00";
        nuevaTransformacionLetra = abecedario.find(
          (h) => h.referencia === caracter
        );

        for (
          let index = 0;
          index < nuevaTransformacionLetra.signos.length;
          index++
        ) {
          const signo = nuevaTransformacionLetra.signos[index];
          modificarPersona(signo);

          if (
            nuevaTransformacionLetra.signos.length > 1 &&
            index < nuevaTransformacionLetra.signos.length - 1
          ) {
            await sleep(1000);
          } else if (caracteres.length > 1 && t < caracteres.length - 1) {
            await sleep(1000);
          } else {
            await sleep(500);
          }
        }
      }
    }
    let resultado = eliminarPalabras(textoProcesado, palabrasTraducidas);

    // Mostrar el resultado
    document.getElementById("textoProcesado").innerText = resultado;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
