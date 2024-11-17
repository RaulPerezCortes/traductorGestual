document
  .getElementById("palabra")
  .addEventListener("input", sePuedeAñadirPalabra);

function sePuedeAñadirPalabra() {
  const array = document.getElementById("selectSePuedeAñadirPalabra").value;
  const caracteres = document.getElementById("palabra").value;
  let nuevaTransformacion = null;

  if (array == "palabras") {
    nuevaTransformacion = palabras.find((t) => t.referencia === caracteres);
    if (nuevaTransformacion) {
      if (nuevaTransformacion.signos.length > 1) {
        // Verificar si ya se mostró el prompt
        if (!nuevaTransformacion.promptMostrado) {
          setTimeout(() => {
            const numeroDelSigno = parseInt(
              prompt(
                "Este signo tiene " +
                  nuevaTransformacion.signos.length +
                  " elementos, elige cuál quieres"
              ),
              10
            );
            if (
              !isNaN(numeroDelSigno) &&
              numeroDelSigno >= 1 &&
              numeroDelSigno <= nuevaTransformacion.signos.length
            ) {
              nuevaTransformacion.promptMostrado = true; // Marcar que se mostró el prompt
              console.log(numeroDelSigno);
              modificarPersona(nuevaTransformacion.signos[numeroDelSigno - 1]);
            } else {
              alert("Por favor, ingresa un número válido.");
            }
          }, 100);
        }
      } else {
        modificarPersona(nuevaTransformacion.signos[0]);
      }
    }
  } else {
    nuevaTransformacion = abecedario.find((t) => t.referencia === caracteres);
    if (nuevaTransformacion && nuevaTransformacion.signos.length > 1) {
      // Verificar si ya se mostró el prompt
      if (!nuevaTransformacion.promptMostrado) {
        setTimeout(() => {
          const numeroDelSigno = parseInt(
            prompt(
              "Este signo tiene " +
                nuevaTransformacion.signos.length +
                " elementos, elige cuál quieres"
            ),
            10
          );
          if (
            !isNaN(numeroDelSigno) &&
            numeroDelSigno >= 1 &&
            numeroDelSigno <= nuevaTransformacion.signos.length
          ) {
            nuevaTransformacion.promptMostrado = true; // Marcar que se mostró el prompt
            console.log(numeroDelSigno);
            modificarPersona(nuevaTransformacion.signos[numeroDelSigno - 1]);
          } else {
            alert("Por favor, ingresa un número válido.");
          }
        }, 100);
      }
    } else if (nuevaTransformacion) {
      modificarPersona(nuevaTransformacion.signos[0]);
    }
  }

  // Restablecer promptMostrado al final de la función
  if (nuevaTransformacion) {
    document.getElementById("sePuedeAñadirPalabra").innerHTML = "Ya creada";
    nuevaTransformacion.promptMostrado = false;
  } else {
    document.getElementById("sePuedeAñadirPalabra").innerHTML = "No creada";
  }
}
