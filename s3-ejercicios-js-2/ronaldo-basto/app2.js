
let destacados = document.querySelectorAll('.destacado');
destacados.forEach(elemento => {
  elemento.style.backgroundColor = 'yellow';
});
// Selecciona el contenedor con id "menu"
const menu = document.getElementById('menu');
const enlaces = menu.querySelectorAll('a');
enlaces.forEach(enlace => {
enlace.classList.add('activo');
});

// Selecciona todas las imágenes que tengan atributo alt
const imagenesConAlt = document.querySelectorAll('img[alt]');
imagenesConAlt.forEach(img => {
  img.style.border = '3px solid blue';
});

// Selecciona todos los <li> impares dentro de la lista con clase "tareas"
const tareasImpares = document.querySelectorAll('.tareas li:nth-child(odd)');
tareasImpares.forEach(li => {
  li.style.fontWeight = 'bold';
});

  // Función que desmarca todos los checkboxes seleccionados
function desmarcarCheckboxes() {
 const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
 checkboxesMarcados.forEach(checkbox => {
      checkbox.checked = false;
    });
  }
  // Asociar la función al botón
const boton = document.getElementById('ejercicio5');
boton.addEventListener('click', desmarcarCheckboxes);