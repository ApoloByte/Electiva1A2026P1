// EJERCICIO 1 — Acceso por ID
function ej1() {
  // 1b. Cambiar contenido del elemento con id "mi-elemento"
  const elemento = document.getElementById('mi-elemento');
  elemento.textContent = 'Hola, Como vas?!';

  // 1c. Cambiar el color de fondo a azul
  elemento.style.backgroundColor = 'blue';
  elemento.style.color = 'white';
}

// EJERCICIO 2 — Acceso por clase
function ej2() {
  // 2b. Cambiar el contenido de todos los elementos con clase "mi-clase"
  const elementos = document.getElementsByClassName('mi-clase');

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = 'Holaaaa rey';

    // 2c. Cambiar el color del texto a verde
    elementos[i].style.color = 'green';
  }
}

// EJERCICIO 3 — Acceso por etiqueta <p>
function ej3() {
  // 3b. Cambiar el contenido de todos los <p>
  const parrafos = document.getElementsByTagName('p');

  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = 'Hola mundo';

    // 3c. Fondo amarillo y borde sólido de 1px
    parrafos[i].style.backgroundColor = 'yellow';
    parrafos[i].style.border = '1px solid black';
    parrafos[i].style.padding = '4px';
  }
}
