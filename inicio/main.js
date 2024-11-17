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
}
