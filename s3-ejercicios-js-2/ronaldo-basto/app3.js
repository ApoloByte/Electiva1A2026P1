// Referencia al contenedor y al botón
const contenedor = document.getElementById('lista-tareas');
const boton = document.getElementById('agregar-tarea');

// Contador para numerar las tareas
let contador = 1;

function agregarTarea() {
  // Verificar si ya existe un <ul> dentro del contenedor
  let lista = contenedor.querySelector('ul');
  if (!lista) {
    lista = document.createElement('ul');
    contenedor.appendChild(lista);
  }

  // Crear un nuevo <li> con el texto "Tarea X"
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = `Tarea ${contador}`;

  // Añadir el nuevo <li> al <ul>
  lista.appendChild(nuevoItem);

  // Incrementar el contador
  contador++;
}

// Asociar la función al botón
boton.addEventListener('click', agregarTarea);
