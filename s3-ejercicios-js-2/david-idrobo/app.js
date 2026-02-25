// Accedemos al elemento por su id
const miElemento = document.getElementById("mi-elemento");

// Cambiamos el contenido
miElemento.textContent = "Hola, mundo!";

// Cambiamos el color de fondo a azul
miElemento.style.backgroundColor = "blue";
// Seleccionamos todos los elementos con la clase "mi-clase"
const elementos = document.getElementsByClassName("mi-clase");

// Convertimos a array y los recorremos
for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Hola, mundo!";
    elementos[i].style.color = "green"; // Cambia el color del texto
}