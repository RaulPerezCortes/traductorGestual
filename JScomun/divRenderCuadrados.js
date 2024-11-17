//este codigo es una prueba, y no se está utilizando

document.addEventListener("DOMContentLoaded", function () {
  // Crea una cadena HTML con la estructura deseada
  var htmlContent = `
      <div id="envolver">
        <div id="container">
          <div id="resto"></div>
          <div id="brazoIzquierdo">
            <div id="antebrazoIzquierdo">
              <div id="manoIzquierdaEntera"></div>
            </div>
          </div>
          <div id="brazoDerecho">
            <div id="antebrazoDerecho">
              <div id="manoDerechaEntera"></div>
            </div>
          </div>
        </div>
      </div>
    `;

  // Crea un div temporal y establece su contenido HTML
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;

  // Agrega el contenido al cuerpo del documento
  document.body.appendChild(tempDiv.firstChild);
});
