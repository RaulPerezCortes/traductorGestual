const container = document.getElementById("container");
const envolver = document.getElementById("envolver");

let cuadrados = [];

function añadirCuadradosPorCodigo() {
  // Obtener el valor del campo de texto
  let codigoCuadrados = document.getElementById(
    "añadirCuadradosPorCodigo"
  ).value;

  try {
    // Convertir la cadena JSON a un objeto
    let cuadradosArray = JSON.parse(codigoCuadrados);

    // Verificar si cuadradosArray es un array
    if (Array.isArray(cuadradosArray)) {
      // Iterar sobre el array y crear cuadrados
      cuadradosArray.forEach((squareData) => {
        crearCuadrado(
          squareData.nombre,
          squareData.color,
          squareData.borderRadius,
          squareData.width,
          squareData.height,
          squareData.rotation,
          squareData.rotateX,
          squareData.rotateY,
          squareData.puntoRotacion,
          squareData.top,
          squareData.left
        );
      });
    } else {
      console.error("El código proporcionado no es un array JSON válido.");
    }
  } catch (error) {
    console.error("Error al analizar el código JSON:", error);
  }
}

function crearCuadrado(
  nombre = "sin_nombre",
  color = "#F7DCC7",
  borderRadius = "10px",
  width = 20,
  height = 20,
  rotation = 0,
  rotateX = 0,
  rotateY = 0,
  puntoRotacion = "center center",
  top = 5,
  left = 5
) {
  const newSquare = document.createElement("div");
  newSquare.className = "square";
  newSquare.addEventListener("click", seleccionarCuadrado);
  newSquare.addEventListener("mousedown", handleDrag);
  container.appendChild(newSquare);

  newSquare.style.backgroundColor = color;
  newSquare.style.borderRadius = borderRadius;
  newSquare.style.width = width + "%";
  newSquare.style.height = height + "%";
  newSquare.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  newSquare.style.top = top + "%";
  newSquare.style.left = left + "%";
  newSquare.style.transformOrigin = puntoRotacion;
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
    };
  });

  // Muestra el mensaje en un alert
  document.getElementById("validez").innerHTML = JSON.stringify(
    cuadradosInfo,
    null,
    2
  );
}

function eliminarCuadrado() {
  const selectedSquare = document.querySelector(".selected");

  if (selectedSquare) {
    container.removeChild(selectedSquare);
    const index = cuadrados.findIndex((sq) => sq.element === selectedSquare);
    if (index !== -1) {
      cuadrados.splice(index, 1);
    }
  }
}

function duplicarCuadrado() {
  const selectedSquare = document.querySelector(".selected");

  if (!selectedSquare) {
    return;
  }

  crearCuadrado(
    cuadrados.find((sq) => sq.element === selectedSquare).nombre,
    cuadrados.find((sq) => sq.element === selectedSquare).color,
    cuadrados.find((sq) => sq.element === selectedSquare).borderRadius,
    cuadrados.find((sq) => sq.element === selectedSquare).width,
    cuadrados.find((sq) => sq.element === selectedSquare).height,
    cuadrados.find((sq) => sq.element === selectedSquare).rotation,
    cuadrados.find((sq) => sq.element === selectedSquare).rotateX,
    cuadrados.find((sq) => sq.element === selectedSquare).rotateY,
    cuadrados.find((sq) => sq.element === selectedSquare).puntoRotacion
  );

  mostrarValoresActuales();
}

function seleccionarCuadrado(e) {
  cuadrados.forEach((square) => square.element.classList.remove("selected"));

  const square = e.target || e;
  square.classList.add("selected");

  const selectedSquareData = cuadrados.find((sq) => sq.element === square);

  // Actualizar los valores de los inputs según el cuadrado seleccionado
  document.getElementById("colorPicker").value = selectedSquareData.color;
  document.getElementById("borderRadius").value = parseFloat(
    selectedSquareData.borderRadius.match(/\d+(\.\d+)?/)
  );
  document.getElementById("borderRadius_number").value = parseFloat(
    selectedSquareData.borderRadius.match(/\d+(\.\d+)?/)
  ); // Sincronizar el campo number
  document.getElementById("width").value = selectedSquareData.width;
  document.getElementById("width_number").value = selectedSquareData.width; // Sincronizar el campo number
  document.getElementById("height").value = selectedSquareData.height;
  document.getElementById("height_number").value = selectedSquareData.height; // Sincronizar el campo number
  document.getElementById("rotation").value = selectedSquareData.rotation;
  document.getElementById("rotation_number").value =
    selectedSquareData.rotation; // Sincronizar el campo number
  document.getElementById("rotateX").value = selectedSquareData.rotateX;
  document.getElementById("rotateX_number").value = selectedSquareData.rotateX; // Sincronizar el campo number
  document.getElementById("rotateY").value = selectedSquareData.rotateY;
  document.getElementById("rotateY_number").value = selectedSquareData.rotateY; // Sincronizar el campo number
  document.getElementById("nombre").value = selectedSquareData.nombre;
  document.getElementById("puntoDeRotacion").value =
    selectedSquareData.puntoRotacion;

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
    document.getElementById("borderRadiusValue").innerHTML =
      selectedSquareData.borderRadius;
    document.getElementById("widthValue").innerHTML = selectedSquareData.width;
    document.getElementById("heightValue").innerHTML =
      selectedSquareData.height;
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
