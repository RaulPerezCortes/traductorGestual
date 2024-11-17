function modificarPersona(objeto) {
  cuadrados.forEach((squareData) => {
    const square = squareData.element;
    const nombre = squareData.nombre;
    const nuevaTransformacion = Object.values(objeto).find(
      (t) => t.nombre === nombre
    );

    if (nuevaTransformacion !== undefined) {
      const elemento = obtenerElementoPorNombre(nombre, square);
      const puntoDeRotacionX = squareData.left + squareData.width / 2;
      const puntoDeRotacionY = squareData.top;

      aplicarTransformacion(
        elemento,
        nuevaTransformacion.zIndex,
        puntoDeRotacionX,
        puntoDeRotacionY,
        nuevaTransformacion.rotation,
        nuevaTransformacion.rotateX,
        nuevaTransformacion.rotateY,
        elemento === square, // true si es el defaultElement, false de lo contrario
        squareData.puntoRotacion // Punto de rotación específico del defaultElement
        //squareData.rotation,
        //squareData.rotateX,
        //squareData.rotateY
      );

      // Actualizar los valores en el diccionario
      squareData.rotation = nuevaTransformacion.rotation;
      squareData.rotateX = nuevaTransformacion.rotateX;
      squareData.rotateY = nuevaTransformacion.rotateY;
      squareData.zIndex = nuevaTransformacion.zIndex;
    }
  });
}
