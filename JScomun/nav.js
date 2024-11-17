document.addEventListener("DOMContentLoaded", function () {
  // Crear el elemento header
  var header = document.createElement("header");

  document.title = "TraductorGestual";

  // Crear el contenido del header
  header.innerHTML = `
        <a href="/">
            <p>TraductorGestual</p>
        </a>

        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/desarrollo">Desarrollo</a></li>
                <li><a href="/creacion">Creacion</a></li>
            </ul>
        </nav>
    `;

  // Agregar el header al comienzo del cuerpo del documento
  document.body.prepend(header);
});
