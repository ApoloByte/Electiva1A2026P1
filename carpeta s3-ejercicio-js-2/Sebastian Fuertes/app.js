
let elemento = document.getElementById("mi-elemento");

elemento.style.color = "red";

elemento.innerHTML = "Hola, mundo!";

console.log(elemento); 

// Cambiar el estilo de elementos con class="mi-clase"
var elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "orange"; 
}

console.log(elementos); // Muestra la colección de elementos en la consola