document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const submenuParent = document.querySelector('.has-submenu > a');

    // Abrir/cerrar menú lateral en móvil
    menuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('open');
        // Asegurarse de que el submenú esté cerrado al abrir/cerrar el menú principal
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => submenu.classList.remove('open'));
    });

    // Cerrar menú al hacer click fuera (solo móvil)
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 600) {
            if (!navbarMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navbarMenu.classList.remove('open');
                const submenus = document.querySelectorAll('.submenu');
                submenus.forEach(submenu => submenu.classList.remove('open'));
            }
        }
    });

    // Submenú en móvil: abrir/cerrar al tocar "Rutas"
    if (submenuParent) {
        submenuParent.addEventListener('click', function (e) {
            if (window.innerWidth <= 600) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                submenu.classList.toggle('open');
            }
        });
    }
});
