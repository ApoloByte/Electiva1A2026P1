// Acceder a un elemento con id="mi-elemento"
let elemento = document.getElementById("mi-elemento");
elemento.style.color = "Blue"; // Cambia el color del texto a rojo
elemento.innerHTML = "Hola, gente!";
console.log(elemento); // Muestra el elemento en la consola

// Cambiar el estilo de elementos con class="mi-clase"
var elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "green"; // Cambia el color del texto a rojo
}

console.log(elementos); // Muestra la colección de elementos en la consola