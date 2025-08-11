(async () => {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const basePath = pathParts.length > 0 ? '/' + pathParts[0] + '/' : '/';
    const alias = pathParts.length > 1 ? pathParts.slice(1).join('/') : '';

    console.log('basePath:', basePath);
    console.log('alias:', alias);

    try {
        console.log('Intentando cargar:', basePath + 'data/links.json');
        const res = await fetch(basePath + 'data/links.json');
        if (!res.ok) throw new Error('No se pudo cargar links.json');
        const links = await res.json();

        console.log('Links cargados:', links);

        if (links[alias]) {
            console.log('Redirigiendo a:', links[alias]);
            window.location.href = links[alias];
        } else {
            console.log('Alias no encontrado, redirigiendo a 404');
            window.location.href = basePath + '404.html';
        }
    } catch (error) {
        console.error(error);
        document.body.innerHTML = '<h1>Error cargando enlaces</h1>';
    }
})();
