(async () => {
    // Obtener basePath (subcarpeta o raíz)
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const basePath = pathParts.length > 0 ? '/' + pathParts[0] + '/' : '/';

    // Obtener alias (lo que va después del basePath)
    const alias = pathParts.length > 1 ? pathParts.slice(1).join('/') : '';

    try {
        const res = await fetch(basePath + 'data/links.json');
        if (!res.ok) throw new Error('No se pudo cargar links.json');
        const links = await res.json();

        if (links[alias]) {
            window.location.href = links[alias];
        } else {
            window.location.href = basePath + '404.html';
        }
    } catch (error) {
        console.error(error);
        document.body.innerHTML = '<h1>Error cargando enlaces</h1>';
    }
})();
