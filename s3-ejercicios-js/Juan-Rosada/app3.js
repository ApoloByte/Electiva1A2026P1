// 1. Referencias a los elementos del DOM
const contenedor = document.getElementById('lista-tareas');
const boton = document.getElementById('btn-agregar');

// 2. Contador para el número consecutivo de la tarea
let contadorTareas = 1;

// 3. Función que se ejecuta al hacer clic
boton.addEventListener('click', () => {
    
    // A. Buscar si ya existe un <ul> dentro del contenedor
    let listaUl = contenedor.querySelector('ul');

    // B. Si NO existe (es null), lo creamos y lo añadimos al contenedor
    if (!listaUl) {
        listaUl = document.createElement('ul');
        contenedor.appendChild(listaUl);
    }

    // C. Crear el nuevo elemento <li>
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = `Tarea ${contadorTareas}`;

    // D. Añadir el <li> al <ul>
    listaUl.appendChild(nuevaTarea);

    // E. Incrementar el contador para la siguiente tarea
    contadorTareas++;
});