let micAccesoConcedido = false;
let reconocedor;
let isListening = false;

function toggleEntradaVoz() {
  const botonHablar = document.getElementById("botonHablar");
  const entradaTexto = document.getElementById("entradaTexto");

  isListening = !isListening;

  if (!micAccesoConcedido) {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      reconocedor = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      reconocedor.lang = "es-ES";
    } else {
      // Respaldar con la API de reconocimiento de voz de Google
      reconocedor = new window.webkitSpeechRecognition();
      reconocedor.lang = "es-ES";
      reconocedor.continuous = true;
      reconocedor.interimResults = true;
    }

    reconocedor.onstart = function () {
      botonHablar.classList.add("activo");
    };

    reconocedor.onend = function () {
      botonHablar.classList.remove("activo");
      if (isListening) {
        reconocedor.start();
      }
    };

    reconocedor.onresult = function (event) {
      const resultado = event.results[0][0].transcript;
      const valorActual = entradaTexto.value;
      entradaTexto.value = valorActual + " " + resultado;
      entradaTexto.selectionStart = entradaTexto.selectionEnd =
        entradaTexto.value.length;
      entradaTexto.scrollLeft = entradaTexto.scrollWidth;
      entradaTexto.focus();
      procesarTexto();
    };

    reconocedor.onerror = function (event) {
      console.error("Error en la entrada de voz:", event.error);
      botonHablar.classList.remove("activo");
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        micAccesoConcedido = true;
        if (isListening) {
          reconocedor.start();
        } else {
          reconocedor.stop();
        }
      })
      .catch(function (error) {
        console.error("Error al obtener acceso al micrófono:", error);
        botonHablar.classList.remove("activo");
      });
  } else {
    if (isListening) {
      reconocedor.start();
    } else {
      reconocedor.stop();
    }
  }
}
