// redirect.js
fetch('data/links.json')
  .then(response => response.json())
  .then(links => {
    // Obtener el "hash" sin el símbolo #
    const alias = window.location.hash.substring(1);

    if (alias && links[alias]) {
      window.location.href = links[alias];
    } else if (alias) {
      document.body.innerHTML = `<h1>El enlace "${alias}" no existe</h1>`;
    } else {
      document.body.innerHTML = "<h1>Bienvenido al gestor de redirecciones</h1>";
    }
  })
  .catch(error => {
    console.error('Error cargando links.json:', error);
    document.body.innerHTML = "<h1>Error cargando redirecciones</h1>";
  });
