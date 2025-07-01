
document.querySelectorAll('#menu-categorias .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const filtro = this.getAttribute('data-filtro');
        const produtos = document.querySelectorAll('#produtos .col-md-3');

        produtos.forEach(produto => {
            if (filtro === 'todos' || produto.getAttribute('data-categoria') === filtro) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
    });
});

