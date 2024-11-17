personaBase.forEach((squareData) => {
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

const selectElement = document.getElementById("nombreSelector");

// Verificar si se encontró el elemento antes de continuar
if (selectElement) {
  // Iterar sobre el array y agregar opciones al select
  personaBase.forEach((persona) => {
    const optionElement = document.createElement("option");
    optionElement.value = persona.nombre;
    optionElement.textContent = persona.nombre;
    selectElement.appendChild(optionElement);
  });
}
