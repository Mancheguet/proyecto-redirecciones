(async () => {
    const path = window.location.pathname.replace(/^\/+/, ''); // quita "/" inicial
    const res = await fetch('data/links.json');
    const links = await res.json();
    if (links[path]) {
        window.location.href = links[path];
    } else {
        window.location.href = '/404.html'; // si no existe, manda a la página de error
    }
})();