let elemento = document.getElementById("mi-elemento");
elemento.style.color = "yellow"; // Cambia el color del texto a rojo
elemento.innerHTML = "Hola, gente!";
console.log(elemento); // Muestra el elemento en la consola

// Cambiar el estilo de elementos con class="mi-clase"
var elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "red"; // Cambia el color del texto a rojo
}

console.log(elementos); // Muestra la colección de elementos en la consola

let parrafos = document.getElementsByTagName('p');
console.log(parrafos); // Muestra una colección de todos los elementos


for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'Hola mundo ' + (i + 1);
}

for (let i = 0; i < parrafos.length; i++) {
	parrafos[i].style.backgroundColor = 'blue';
	parrafos[i].style.fontWeight = 'bold';
}