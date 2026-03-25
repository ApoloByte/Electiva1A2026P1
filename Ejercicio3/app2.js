// EJERCICIO 4.4 — Seleccionar elementos con clase "destacado" y cambiar su fondo a amarillo
document.getElementById('ejercicio1').addEventListener('click', function () {
  const destacados = document.querySelectorAll('.destacado');
  destacados.forEach(function (el) {
    el.style.backgroundColor = 'yellow';
  });
});

// EJERCICIO 4.6 — Seleccionar enlaces <a> dentro de #menu y agregar la clase "activo"
document.getElementById('ejercicio2').addEventListener('click', function () {
  const enlaces = document.querySelectorAll('#menu a');
  enlaces.forEach(function (enlace) {
    enlace.classList.add('activo');
  });
});

// EJERCICIO 4.7 — Seleccionar imágenes con atributo alt y cambiar su borde a 3px sólido azul

document.getElementById('ejercicio3').addEventListener('click', function () {
  const imagenes = document.querySelectorAll('img[alt]');
  imagenes.forEach(function (img) {
    img.style.border = '6px solid blue';
  });
});

// EJERCICIO 4.8 — Seleccionar <li> impares de .tareas y ponerlos en negrita (nth-child es 1-basado; impares = 1°, 3°, 5° ...)
document.getElementById('ejercicio4').addEventListener('click', function () {
  const itemsImpares = document.querySelectorAll('.tareas li:nth-child(odd)');
  itemsImpares.forEach(function (li) {
    li.classList.add('negrita');
  });
});

// EJERCICIO 4.9 — Función que desmarque todos los checkboxes que estén marcados
function desmarcarCheckboxes() {
  const marcados = document.querySelectorAll('input[type="checkbox"]:checked');
  marcados.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

document.getElementById('ejercicio5').addEventListener('click', desmarcarCheckboxes);

// EJERCICIO 4.10 — Lista de tareas dinámica con appendChild
let contadorTareas = 0;

document.getElementById('ejercicio6').addEventListener('click', function () {
  contadorTareas++;

  const contenedor = document.getElementById('lista-tareas');

  // Crear el <ul> solo si todavía no existe
  let lista = contenedor.querySelector('ul');
  if (!lista) {
    lista = document.createElement('ul');
    contenedor.appendChild(lista);
  }

  // Crear el nuevo <li>
  const item = document.createElement('li');
  item.textContent = 'Tarea ' + contadorTareas;

  lista.appendChild(item);
});


// OBJETO MATH

// 1. Número aleatorio entre 0 y 10 (puede incluir decimales)
const aleatorio0a10 = Math.random() * 10;
console.log('1. Aleatorio 0–10 (decimal):', aleatorio0a10);

// 2. Número entero aleatorio entre 0 y 10
const entero0a10 = Math.floor(Math.random() * 11);
console.log('2. Entero aleatorio 0–10:', entero0a10);

// 3. Número entero aleatorio entre dos valores (min y max, inclusive)
function enteroEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('3. Entero entre 5 y 15:', enteroEntre(5, 15));

// 4. Funciones de redondeo
const numero = 4.6;
console.log('4a. Math.round(4.6):', Math.round(numero));  // 5  → al más cercano
console.log('4b. Math.ceil(4.6) :', Math.ceil(numero));   // 5  → siempre hacia arriba
console.log('4c. Math.floor(4.6):', Math.floor(numero));  // 4  → siempre hacia abajo

// 5. Potencias con Math.pow
console.log('5a. 4^3  =', Math.pow(4, 3));   // 64
console.log('5b. 5^2  =', Math.pow(5, 2));   // 25
console.log('5c. 5^-2 =', Math.pow(5, -2));  // 0.04

// 6. Raíces cuadradas con Math.sqrt
console.log('6a. √9  =', Math.sqrt(9));   // 3
console.log('6b. √64 =', Math.sqrt(64));  // 8
console.log('6c. √25 =', Math.sqrt(25));  // 5
