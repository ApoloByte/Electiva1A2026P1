// obtiene el contenedor principal donde se van a agregar las tareas
const contenedor = document.getElementById('lista-tareas');

// obtiene el boton que va a disparar la accion
const boton = document.getElementById('btn-agregar');


// variable que lleva la cuenta de cuantas tareas se han creado
let contadorTareas = 1;


// agrega un evento al boton cuando se hace click
boton.addEventListener('click', function() {
    
    // busca si ya existe una lista <ul> dentro del contenedor
    let ul = contenedor.querySelector('ul');
    

    // si no existe la lista, la crea
    if (!ul) {
        ul = document.createElement('ul'); // crea la etiqueta <ul>
        contenedor.appendChild(ul); // la agrega al contenedor
    }

    // crea un nuevo elemento de lista <li>
    const nuevoLi = document.createElement('li');

    // le asigna un texto con numeracion
    nuevoLi.textContent = "Tarea " + contadorTareas;

    // incrementa el contador para la siguiente tarea
    contadorTareas++; 


    // agrega el nuevo <li> dentro del <ul>
    ul.appendChild(nuevoLi);
    
});