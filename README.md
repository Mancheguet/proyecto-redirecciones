# Gestor de Redirecciones Estático

Proyecto para gestionar redirecciones en un dominio usando solo archivos estáticos, ideal para GitHub Pages.

Solo tienes que editar el archivo `data/links.json` con las rutas y URLs destino, y al acceder a `tudominio.com/alias` se redirige automáticamente.

Funciona sin backend y es fácil de mantener.

---

Archivos principales:

- `index.html`: carga el script de redirección.  
- `data/links.json`: lista de enlaces.  
- `js/redirect.js`: lógica de redirección.  
- `404.html`: página para enlaces no encontrados.
