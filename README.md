# Gestor de Redirecciones Estático

Proyecto para gestionar redirecciones en un dominio usando solo archivos estáticos, ideal para GitHub Pages.

---

## Uso

Para redirigir, usa URLs con el parámetro `link` en la query string. Por ejemplo:


Esto hará que el proyecto busque `link1` en `data/links.json` y redirija a la URL configurada.

---

https://javimb.link/?link=link1

## Archivos principales

- `index.html`: carga el script de redirección.  
- `data/links.json`: lista de enlaces con formato `"alias": "url"`.  
- `js/redirect.js`: lógica de redirección que lee el parámetro `link`.  
- `404.html`: página que se muestra si el alias no existe.

---

## Añadir o modificar enlaces

Edita el archivo `data/links.json` con los alias y URLs deseados, por ejemplo:

```json
{
  "link1": "https://youtube.com",
  "link2": "https://openai.com"
}
