(async () => {
    const params = new URLSearchParams(window.location.search);
    const alias = params.get('link');

    if (!alias) {
        document.body.innerHTML = '<h1>❌ No se indicó link para redirigir</h1>';
        return;
    }

    try {
        const res = await fetch('data/links.json');
        if (!res.ok) throw new Error('No se pudo cargar links.json');
        const links = await res.json();

        if (links[alias]) {
            window.location.href = links[alias];
        } else {
            window.location.href = '404.html';
        }
    } catch (error) {
        console.error(error);
        document.body.innerHTML = '<h1>Error cargando enlaces</h1>';
    }
})();
