function aplicarTransformacion(
  elemento,
  zIndex,
  puntoDeRotacionX,
  puntoDeRotacionY,
  rotation,
  rotateX,
  rotateY,
  isDefaultElement,
  defaultElementPuntoRotacion
  //rotacionActual,
  //rotacionXActual,
  //rotacionYActual
) {
  elemento.style.zIndex = zIndex;

  // Calcula las diferencias de rotación
  //var rotacionDiferencia = calcularDiferenciaRotacion(rotacionActual, rotation);
  //var rotateXDiferencia = calcularDiferenciaRotacion(rotacionXActual, rotateX);
  //var rotateYDiferencia = calcularDiferenciaRotacion(rotacionYActual, rotateY);

  // Obtén el punto de rotación adecuado
  const puntoRotacion = isDefaultElement
    ? defaultElementPuntoRotacion
    : `${puntoDeRotacionX}% ${puntoDeRotacionY}%`;

  // Aplica la transformación con las rotaciones ajustadas
  elemento.style.transformOrigin = puntoRotacion;
  elemento.style.transform = `rotate(${rotation}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function obtenerElementoPorNombre(nombre, defaultElement) {
  switch (nombre) {
    case "brazoSuperiorDerecho":
      return brazoDerecho;
    case "brazoInferiorDerecho":
      return antebrazoDercho;
    case "manoDerecha":
      return manoDerechaEntera;
    case "brazoSuperiorIzquierdo":
      return brazoIzquierdo;
    case "brazoInferiorIzquierdo":
      return antebrazoIzquierdo;
    case "manoIzquierda":
      return manoIzquierdaEntera;
    case "dedoDerecho1":
      return dedoDerecho1Entero;
    case "dedoDerecho2":
      return dedoDerecho2Entero;
    case "dedoDerecho3":
      return dedoDerecho3Entero;
    case "dedoDerecho4":
      return dedoDerecho4Entero;
    case "pulgarDerecho":
      return pulgarDerechoEntero;
    case "dedoDerecho11":
      return dedoDerecho11Entero;
    case "dedoDerecho22":
      return dedoDerecho22Entero;
    case "dedoDerecho33":
      return dedoDerecho33Entero;
    case "dedoDerecho44":
      return dedoDerecho44Entero;
    case "dedoIzquierdo1":
      return dedoIzquierdo1Entero;
    case "dedoIzquierdo2":
      return dedoIzquierdo2Entero;
    case "dedoIzquierdo3":
      return dedoIzquierdo3Entero;
    case "dedoIzquierdo4":
      return dedoIzquierdo4Entero;
    case "pulgarIzquierdo":
      return pulgarIzquierdoEntero;
    case "dedoIzquierdo11":
      return dedoIzquierdo11Entero;
    case "dedoIzquierdo22":
      return dedoIzquierdo22Entero;
    case "dedoIzquierdo33":
      return dedoIzquierdo33Entero;
    case "dedoIzquierdo44":
      return dedoIzquierdo44Entero;
    default:
      return defaultElement;
  }
}
