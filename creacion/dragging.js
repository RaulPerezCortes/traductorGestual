function handleDrag(e) {
  const square = e.target;
  const containerRect = container.getBoundingClientRect(); // Obtener rectángulo del contenedor

  let offsetX = e.clientX - square.getBoundingClientRect().left;
  let offsetY = e.clientY - square.getBoundingClientRect().top;

  function handleMouseMove(e) {
    const x =
      ((e.clientX - offsetX - containerRect.left) / containerRect.width) * 100; // Coordenada x en porcentaje
    const y =
      ((e.clientY - offsetY - containerRect.top) / containerRect.height) * 100; // Coordenada y en porcentaje

    square.style.left = `${x}%`;
    square.style.top = `${y}%`;

    const selectedSquareData = cuadrados.find((sq) => sq.element === square);
    selectedSquareData.top = y;
    selectedSquareData.left = x;
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    const rect = square.getBoundingClientRect();

    // Guardar la posición en porcentaje

    mostrarValoresActuales();
  }

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
}
