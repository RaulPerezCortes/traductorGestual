document.addEventListener("DOMContentLoaded", function () {
  // Detectar si estamos en una subpágina (/creacion/, /desarrollo/, etc.)
  const path = window.location.pathname;

  // Si la ruta contiene "/creacion" o "/desarrollo", estamos en subcarpeta
  const enSubcarpeta =
    path.includes("/creacion") || path.includes("/desarrollo");

  // Desde la raíz: "./"
  // Desde subcarpeta: "../"
  const base = enSubcarpeta ? "../" : "./";

  document.title = "TraductorGestual";

  const header = document.createElement("header");

  header.innerHTML = `
    <a href="${base}">
      <p>TraductorGestual</p>
    </a>

    <nav>
      <ul>
        <li><a href="${base}">Inicio</a></li>
        <li><a href="${base}desarrollo/">Desarrollo</a></li>
        <li><a href="${base}creacion/">Creacion</a></li>
      </ul>
    </nav>
  `;

  document.body.prepend(header);
});
