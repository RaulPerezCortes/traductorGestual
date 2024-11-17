function cambiarColor() {
  const color = document.getElementById("colorPicker").value;
  const selectedSquare = document.querySelector(".selected");

  selectedSquare.style.backgroundColor = color;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.color = color;

  mostrarValoresActuales();
}

function cambiarRadio() {
  const radio = document.getElementById("borderRadius").value;
  const selectedSquare = document.querySelector(".selected");
  const borderUnit = document.getElementById("borderUnit").value;

  selectedSquare.style.borderRadius = radio + borderUnit;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.borderRadius = radio + borderUnit;

  document.getElementById("borderRadius_number").value = radio;

  mostrarValoresActuales();
}

function cambiarUnidadBorde() {
  cambiarRadio();
}

function cambiarAnchura() {
  const anchura = document.getElementById("width").value;
  const selectedSquare = document.querySelector(".selected");

  selectedSquare.style.width = `${anchura}%`;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.width = parseFloat(anchura, 10);

  document.getElementById("width_number").value = anchura;

  mostrarValoresActuales();
}

function cambiarAltura() {
  const altura = document.getElementById("height").value;
  const selectedSquare = document.querySelector(".selected");

  selectedSquare.style.height = `${altura}%`;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.height = parseFloat(altura, 10);

  document.getElementById("height_number").value = altura;

  mostrarValoresActuales();
}

function rotarCuadrado() {
  const rotation = document.getElementById("rotation").value;
  const selectedSquare = document.querySelector(".selected");

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );

  selectedSquare.style.transform = `rotate(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotation
  }deg) rotateX(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateX
  }deg) rotateY(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateY
  }deg) `;

  // Actualizar el valor en el diccionario

  selectedSquareData.rotation = parseInt(rotation, 10);

  document.getElementById("rotation_number").value = rotation;

  mostrarValoresActuales();
}

function cambiarRotateX() {
  const rotateX = document.getElementById("rotateX").value;
  const selectedSquare = document.querySelector(".selected");

  // Aplicar la rotación en el eje X
  selectedSquare.style.transform = `rotate(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotation
  }deg) rotateX(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateX
  }deg) rotateY(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateY
  }deg) `;

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateX = parseInt(rotateX, 10);

  document.getElementById("rotateX_number").value = rotateX;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function cambiarRotateY() {
  const rotateY = document.getElementById("rotateY").value;
  const selectedSquare = document.querySelector(".selected");

  // Aplicar la rotación en el eje Y
  selectedSquare.style.transform = `rotate(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotation
  }deg) rotateX(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateX
  }deg) rotateY(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateY
  }deg) `;

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateY = parseInt(rotateY, 10);

  document.getElementById("rotateY_number").value = rotateY;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function cambiarNombre() {
  const nombreValue = document.getElementById("nombre").value;
  const selectedSquare = document.querySelector(".selected");
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.nombre = nombreValue;
}

function cambiarPuntoRotacion() {
  const puntoDeRotacion = document.getElementById("puntoDeRotacion").value;
  const selectedSquare = document.querySelector(".selected");
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );

  selectedSquare.style.transformOrigin = puntoDeRotacion;
  selectedSquareData.puntoRotacion = puntoDeRotacion;
}

// Agregar manejo de eventos 'input' para los controles de rango
document.getElementById("colorPicker").addEventListener("input", cambiarColor);
document.getElementById("borderRadius").addEventListener("input", cambiarRadio);
document.getElementById("width").addEventListener("input", cambiarAnchura);
document.getElementById("height").addEventListener("input", cambiarAltura);
document.getElementById("rotation").addEventListener("input", rotarCuadrado);
document.getElementById("rotateX").addEventListener("input", cambiarRotateX);
document.getElementById("rotateY").addEventListener("input", cambiarRotateY);
document.getElementById("nombre").addEventListener("input", cambiarNombre);
document
  .getElementById("puntoDeRotacion")
  .addEventListener("input", cambiarPuntoRotacion);

document
  .getElementById("borderRadius_number")
  .addEventListener("input", cambiarRadioNumber);
document
  .getElementById("width_number")
  .addEventListener("input", cambiarAnchuraNumber);
document
  .getElementById("height_number")
  .addEventListener("input", cambiarAlturaNumber);
document
  .getElementById("rotation_number")
  .addEventListener("input", rotarCuadradoNumber);
document
  .getElementById("rotateX_number")
  .addEventListener("input", cambiarRotateXNumber);
document
  .getElementById("rotateY_number")
  .addEventListener("input", cambiarRotateYNumber);

// Tu código JavaScript existente...

// Nuevas funciones para campos de tipo number
function cambiarRadioNumber() {
  const radio = document.getElementById("borderRadius_number").value;
  const selectedSquare = document.querySelector(".selected");
  const borderUnit = document.getElementById("borderUnit").value;

  selectedSquare.style.borderRadius = radio + borderUnit;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.borderRadius = radio + borderUnit;

  document.getElementById("borderRadius").value = radio;

  mostrarValoresActuales();
}

function cambiarAnchuraNumber() {
  const anchura = document.getElementById("width_number").value;
  const selectedSquare = document.querySelector(".selected");

  selectedSquare.style.width = `${anchura}%`;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.width = parseFloat(anchura, 10);

  document.getElementById("width").value = anchura;

  mostrarValoresActuales();
}

function cambiarAlturaNumber() {
  const altura = document.getElementById("height_number").value;
  const selectedSquare = document.querySelector(".selected");

  selectedSquare.style.height = `${altura}%`;

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.height = parseFloat(altura, 10);

  document.getElementById("height").value = altura;

  mostrarValoresActuales();
}

function rotarCuadradoNumber() {
  const rotation = document.getElementById("rotation_number").value;
  const selectedSquare = document.querySelector(".selected");

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );

  selectedSquare.style.rotate = `${rotation}deg`;

  selectedSquareData.rotation = parseInt(rotation, 10);

  document.getElementById("rotation").value = rotation;

  mostrarValoresActuales();
}

function cambiarRotateXNumber() {
  const rotateX = document.getElementById("rotateX_number").value;
  const selectedSquare = document.querySelector(".selected");

  // Aplicar la rotación en el eje X
  selectedSquare.style.transform = `rotateX(${rotateX}deg) rotateY(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateY
  }deg) rotate(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotation
  }deg)`;

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateX = parseInt(rotateX, 10);

  document.getElementById("rotateX").value = rotateX;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function cambiarRotateYNumber() {
  const rotateY = document.getElementById("rotateY_number").value;
  const selectedSquare = document.querySelector(".selected");

  // Aplicar la rotación en el eje Y
  selectedSquare.style.transform = `rotateX(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotateX
  }deg) rotateY(${rotateY}deg) rotate(${
    cuadrados.find((sq) => sq.element === selectedSquare).rotation
  }deg)`;

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateY = parseInt(rotateY, 10);

  document.getElementById("rotateY").value = rotateY;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}
