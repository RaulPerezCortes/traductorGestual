let cuadrados = [];

const container = document.getElementById("container");
const envolver = document.getElementById("envolver");

const brazoDerecho = document.getElementById("brazoDerecho");
const antebrazoDercho = document.getElementById("antebrazoDerecho");
const manoDerechaEntera = document.getElementById("manoDerechaEntera");

const dedoDerecho1Entero = document.getElementById("dedoDerecho1Entero");
const dedoDerecho2Entero = document.getElementById("dedoDerecho2Entero");
const dedoDerecho3Entero = document.getElementById("dedoDerecho3Entero");
const dedoDerecho4Entero = document.getElementById("dedoDerecho4Entero");
const pulgarDerechoEntero = document.getElementById("pulgarDerechoEntero");

const dedoDerecho11Entero = document.getElementById("dedoDerecho11Entero");
const dedoDerecho22Entero = document.getElementById("dedoDerecho22Entero");
const dedoDerecho33Entero = document.getElementById("dedoDerecho33Entero");
const dedoDerecho44Entero = document.getElementById("dedoDerecho44Entero");

const brazoIzquierdo = document.getElementById("brazoIzquierdo");
const antebrazoIzquierdo = document.getElementById("antebrazoIzquierdo");
const manoIzquierdaEntera = document.getElementById("manoIzquierdaEntera");

const dedoIzquierdo1Entero = document.getElementById("dedoIzquierdo1Entero");
const dedoIzquierdo2Entero = document.getElementById("dedoIzquierdo2Entero");
const dedoIzquierdo3Entero = document.getElementById("dedoIzquierdo3Entero");
const dedoIzquierdo4Entero = document.getElementById("dedoIzquierdo4Entero");
const pulgarIzquierdoEntero = document.getElementById("pulgarIzquierdoEntero");

const dedoIzquierdo11Entero = document.getElementById("dedoIzquierdo11Entero");
const dedoIzquierdo22Entero = document.getElementById("dedoIzquierdo22Entero");
const dedoIzquierdo33Entero = document.getElementById("dedoIzquierdo33Entero");
const dedoIzquierdo44Entero = document.getElementById("dedoIzquierdo44Entero");

const resto = document.getElementById("resto");

function crearCuadrado(
  nombre = "sin_nombre",
  color = "#F7DCC7",
  borderRadius = "10px",
  width = 20,
  height = 20,
  rotation = 0,
  rotateX = 0,
  rotateY = 0,
  puntoRotacion = "top center",
  top = 5,
  left = 5,
  zIndex = 10
) {
  const newSquare = document.createElement("div");
  newSquare.className = "square";
  newSquare.addEventListener("click", seleccionarCuadrado);

  if (nombre == "brazoSuperiorDerecho") {
    //contenedor.insertBefore(elemento2, elemento1.nextSibling);
    brazoDerecho.appendChild(newSquare);
  } else if (nombre == "brazoInferiorDerecho") {
    antebrazoDercho.appendChild(newSquare);
  } else if (nombre == "manoDerecha") {
    manoDerechaEntera.appendChild(newSquare);
  } else if (nombre == "dedoDerecho1") {
    dedoDerecho1Entero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho2") {
    dedoDerecho2Entero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho3") {
    dedoDerecho3Entero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho4") {
    dedoDerecho4Entero.appendChild(newSquare);
  } else if (nombre == "pulgarDerecho" || nombre == "pulgarDerecho1") {
    pulgarDerechoEntero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho11" || nombre == "dedoDerecho111") {
    dedoDerecho11Entero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho22" || nombre == "dedoDerecho222") {
    dedoDerecho22Entero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho33" || nombre == "dedoDerecho333") {
    dedoDerecho33Entero.appendChild(newSquare);
  } else if (nombre == "dedoDerecho44" || nombre == "dedoDerecho444") {
    dedoDerecho44Entero.appendChild(newSquare);
  } else if (nombre == "brazoSuperiorIzquierdo") {
    brazoIzquierdo.appendChild(newSquare);
  } else if (nombre == "brazoInferiorIzquierdo") {
    antebrazoIzquierdo.appendChild(newSquare);
  } else if (nombre == "manoIzquierda") {
    manoIzquierdaEntera.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo1") {
    dedoIzquierdo1Entero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo2") {
    dedoIzquierdo2Entero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo3") {
    dedoIzquierdo3Entero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo4") {
    dedoIzquierdo4Entero.appendChild(newSquare);
  } else if (nombre == "pulgarIzquierdo" || nombre == "pulgarIzquierdo1") {
    pulgarIzquierdoEntero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo11" || nombre == "dedoIzquierdo111") {
    dedoIzquierdo11Entero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo22" || nombre == "dedoIzquierdo222") {
    dedoIzquierdo22Entero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo33" || nombre == "dedoIzquierdo333") {
    dedoIzquierdo33Entero.appendChild(newSquare);
  } else if (nombre == "dedoIzquierdo44" || nombre == "dedoIzquierdo444") {
    dedoIzquierdo44Entero.appendChild(newSquare);
  } else {
    resto.appendChild(newSquare);
  }

  newSquare.style.backgroundColor = color;
  newSquare.style.borderRadius = borderRadius;
  newSquare.style.width = width + "%";
  newSquare.style.height = height + "%";
  newSquare.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  newSquare.style.top = top + "%";
  newSquare.style.left = left + "%";
  newSquare.style.transformOrigin = puntoRotacion;
  newSquare.style.zIndex = zIndex;
  newSquare.id = nombre;

  cuadrados.push({
    nombre,
    element: newSquare,
    color,
    borderRadius,
    width,
    height,
    rotation,
    rotateX,
    rotateY,
    puntoRotacion,
    top,
    left,
    zIndex,
  });

  mostrarValoresActuales();
}

function printCuadrados() {
  // Crea un mensaje con la información de la lista de cuadrados
  const cuadradosInfo = cuadrados.map((sq) => {
    return {
      nombre: sq.nombre,
      color: sq.color,
      borderRadius: sq.borderRadius,
      width: sq.width,
      height: sq.height,
      rotation: sq.rotation,
      rotateX: sq.rotateX,
      rotateY: sq.rotateY,
      puntoRotacion: sq.puntoRotacion,
      top: sq.top,
      left: sq.left,
      zIndex: sq.zIndex,
    };
  });

  // Muestra el mensaje en un alert
  document.getElementById("validez").innerHTML = JSON.stringify(
    cuadradosInfo,
    null,
    2
  );
}

function printRotacionCuadrados() {
  // Crea un mensaje con la información de la lista de cuadrados
  const cuadradosInfo = cuadrados.map((sq) => {
    return {
      nombre: sq.nombre,
      rotation: sq.rotation,
      rotateX: sq.rotateX,
      rotateY: sq.rotateY,
      zIndex: sq.zIndex,
    };
  });

  // Muestra el mensaje en un alert
  document.getElementById("validez").innerHTML = JSON.stringify(
    cuadradosInfo,
    null,
    2
  );
}

function seleccionarCuadrado(e) {
  cuadrados.forEach((square) => square.element.classList.remove("selected"));

  const square = e.target || e;
  square.classList.add("selected");

  const selectedSquareData = cuadrados.find((sq) => sq.element === square);

  document.getElementById("zIndex").value = selectedSquareData.zIndex;
  document.getElementById("rotation").value = selectedSquareData.rotation;
  document.getElementById("rotation_number").value =
    selectedSquareData.rotation;
  document.getElementById("rotateX").value = selectedSquareData.rotateX;
  document.getElementById("rotateX_number").value = selectedSquareData.rotateX;
  document.getElementById("rotateY").value = selectedSquareData.rotateY;
  document.getElementById("rotateY_number").value = selectedSquareData.rotateY;

  mostrarValoresActuales();
}

function selectCuadrado() {
  cuadrados.forEach((square) => square.element.classList.remove("selected"));

  selected = document.getElementById("nombreSelector").value;
  const square = document.getElementById(selected);
  square.classList.add("selected");

  const selectedSquareData = cuadrados.find((sq) => sq.element === square);

  document.getElementById("zIndex").value = selectedSquareData.zIndex;
  document.getElementById("rotation").value = selectedSquareData.rotation;
  document.getElementById("rotation_number").value =
    selectedSquareData.rotation;
  document.getElementById("rotateX").value = selectedSquareData.rotateX;
  document.getElementById("rotateX_number").value = selectedSquareData.rotateX;
  document.getElementById("rotateY_number").value = selectedSquareData.rotateY;

  mostrarValoresActuales();
}

function deseleccionarCuadrado() {
  const selectedSquare = document.querySelector(".selected");

  if (selectedSquare) {
    selectedSquare.classList.remove("selected");
    mostrarValoresActuales();
  }
}

function enviarAlFondo() {
  const selectedSquare = document.querySelector(".selected");

  if (selectedSquare) {
    const selectedIndex = cuadrados.findIndex(
      (sq) => sq.element === selectedSquare
    );
    cuadrados.unshift(cuadrados.splice(selectedIndex, 1)[0]);

    cuadrados.forEach((square, index) => {
      square.element.style.zIndex = index;
    });
  }
}

function mostrarValoresActuales() {
  const selectedSquare = document.querySelector(".selected");

  if (selectedSquare) {
    const selectedSquareData = cuadrados.find(
      (sq) => sq.element === selectedSquare
    );

    document.getElementById("zIndexValue").innerHTML =
      selectedSquareData.zIndex;
    document.getElementById("rotationValue").innerHTML =
      selectedSquareData.rotation;
    document.getElementById("rotateXValue").innerHTML =
      selectedSquareData.rotateX;
    document.getElementById("rotateYValue").innerHTML =
      selectedSquareData.rotateY;
    document.getElementById("top").innerHTML = selectedSquareData.top;
    document.getElementById("left").innerHTML = selectedSquareData.left;
  }
}

function actualizarTransformacionesConTransicion() {
  cuadrados.forEach((squareData) => {
    const square = squareData.element;
    const nombre = squareData.nombre;
    const nuevaTransformacion = saludar.find((t) => t.nombre === nombre);

    if (nuevaTransformacion !== undefined) {
      const { rotation, rotateX, rotateY, zIndex } = nuevaTransformacion;

      // Calcular el punto de rotación en porcentaje (%)
      const puntoDeRotacionX = squareData.left + squareData.width / 2;
      const puntoDeRotacionY = squareData.top;

      // Lógica de transformación específica para cada elemento
      if (nombre === "brazoSuperiorDerecho") {
        brazoDerecho.style.zIndex = zIndex;
        brazoDerecho.style.transformOrigin = `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;
        brazoDerecho.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      } else if (nombre === "brazoInferiorDerecho") {
        antebrazoDercho.style.zIndex = zIndex;
        antebrazoDercho.style.transformOrigin = `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;
        antebrazoDercho.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      } else if (nombre === "manoDerecha") {
        manoDerechaEntera.style.zIndex = zIndex;
        manoDerechaEntera.style.transformOrigin = `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;
        manoDerechaEntera.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      } else if (nombre === "brazoSuperiorIzquierdo") {
        brazoIzquierdo.style.zIndex = zIndex;
        brazoIzquierdo.style.transformOrigin = `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;
        brazoIzquierdo.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      } else if (nombre === "brazoInferiorIzquierdo") {
        antebrazoIzquierdo.style.zIndex = zIndex;
        antebrazoIzquierdo.style.transformOrigin = `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;
        antebrazoIzquierdo.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      } else if (nombre === "manoIzquierda") {
        manoIzquierdaEntera.style.zIndex = zIndex;
        manoIzquierdaEntera.style.transformOrigin = `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;
        manoIzquierdaEntera.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      } else {
        square.style.zIndex = zIndex;
        square.style.transformOrigin = squareData.puntoRotacion;
        square.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      }

      // Actualizar los valores en el diccionario
      squareData.rotation = rotation;
      squareData.rotateX = rotateX;
      squareData.rotateY = rotateY;
      squareData.zIndex = zIndex;
    }
  });
}
