// Agregar manejo de eventos 'input' para los controles de rango

document.getElementById("rotation").addEventListener("input", rotarCuadrado);
document.getElementById("rotateX").addEventListener("input", cambiarRotateX);
document.getElementById("rotateY").addEventListener("input", cambiarRotateY);
document.getElementById("zIndex").addEventListener("input", cambiarRotateY);
document
  .getElementById("rotation_number")
  .addEventListener("input", rotarCuadradoNumber);
document
  .getElementById("rotateX_number")
  .addEventListener("input", cambiarRotateXNumber);
document
  .getElementById("rotateY_number")
  .addEventListener("input", cambiarRotateYNumber);

function cambiarRotaciones(selectedSquare) {
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );

  console.log(selectedSquareData);

  const zIndex = selectedSquareData.zIndex;
  const puntoDeRotacionX =
    selectedSquareData.left + selectedSquareData.width / 2;
  const puntoDeRotacionY = selectedSquareData.top;

  const elemento = obtenerElementoPorNombre(selectedSquare.id, selectedSquare);

  aplicarTransformacion(
    elemento,
    zIndex,
    puntoDeRotacionX,
    puntoDeRotacionY,
    selectedSquareData.rotation,
    selectedSquareData.rotateX,
    selectedSquareData.rotateY,
    elemento === selectedSquare, // true si es el defaultElement, false de lo contrario
    selectedSquareData.puntoRotacion // Punto de rotación específico del defaultElement
  );
}

function zIndex() {
  const zIndex = document.getElementById("zIndex").value;
  const selectedSquare = document.querySelector(".selected");

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.zIndex = parseInt(zIndex, 10);

  cambiarRotaciones(selectedSquare);
  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function rotarCuadrado() {
  const rotation = document.getElementById("rotation").value;
  const selectedSquare = document.querySelector(".selected");

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotation = parseInt(rotation, 10);

  cambiarRotaciones(selectedSquare);
  document.getElementById("rotation_number").value = rotation;

  mostrarValoresActuales();
}

function cambiarRotateX() {
  const rotateX = document.getElementById("rotateX").value;
  const selectedSquare = document.querySelector(".selected");

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateX = parseInt(rotateX, 10);

  document.getElementById("rotateX_number").value = rotateX;

  cambiarRotaciones(selectedSquare);
  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function cambiarRotateY() {
  const rotateY = document.getElementById("rotateY").value;
  const selectedSquare = document.querySelector(".selected");
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );

  selectedSquareData.rotateY = parseInt(rotateY, 10);

  cambiarRotaciones(selectedSquare);

  document.getElementById("rotateY_number").value = rotateY;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function rotarCuadradoNumber() {
  const rotation = document.getElementById("rotation_number").value;
  const selectedSquare = document.querySelector(".selected");

  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotation = parseInt(rotation, 10);

  cambiarRotaciones(selectedSquare);

  document.getElementById("rotation").value = rotation;

  mostrarValoresActuales();
}

function cambiarRotateXNumber() {
  const rotateX = document.getElementById("rotateX_number").value;
  const selectedSquare = document.querySelector(".selected");

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateX = parseInt(rotateX, 10);

  cambiarRotaciones(selectedSquare);

  document.getElementById("rotateX").value = rotateX;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}

function cambiarRotateYNumber() {
  const rotateY = document.getElementById("rotateY_number").value;
  const selectedSquare = document.querySelector(".selected");

  // Actualizar el valor en el diccionario
  const selectedSquareData = cuadrados.find(
    (sq) => sq.element === selectedSquare
  );
  selectedSquareData.rotateY = parseInt(rotateY, 10);

  cambiarRotaciones(selectedSquare);

  document.getElementById("rotateY").value = rotateY;

  // Mostrar los valores actuales
  mostrarValoresActuales();
}
