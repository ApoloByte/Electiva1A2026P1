// 1. Seleccionamos los elementos del DOM (Document Object Model)
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-principal');

// 2. Escuchamos el evento 'click'
btnMenu.addEventListener('click', () => {
    // 3. 'toggle' añade la clase si no existe, y la quita si ya existe
    menu.classList.toggle('activo');
    
    // Opcional: Cambiar el icono de ☰ a ✕
    if (menu.classList.contains('activo')) {
        btnMenu.innerText = '✕';
    } else {
        btnMenu.innerText = '☰';
    }
});