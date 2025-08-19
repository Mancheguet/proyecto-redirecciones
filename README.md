# Gestor de Redirecciones con Hash

Este proyecto permite usar tu dominio como un gestor de enlaces sencillo, sin servidor.  
Se basa en archivos estáticos (HTML + JS + JSON) y funciona en GitHub Pages o cualquier hosting estático.

## 🚀 Cómo funciona
- Cada enlace está definido en `data/links.json`.
- Se accede a ellos con un **hash** (`#`) en la URL.

Ejemplo:
- `https://midominio.com/#link1` → redirige a YouTube.
- `https://midominio.com/#link2` → redirige a OpenAI.
- `https://midominio.com/` → muestra una pantalla de bienvenida.

## 📂 Estructura del proyecto

├── index.html
├── js/
  └── redirect.js
└── data/
  └── links.json

## ✍️ Cómo añadir enlaces
Edita el archivo `data/links.json` y agrega un nuevo alias:

```json
{
  "link1": "https://youtube.com",
  "link2": "https://github.com"
}
