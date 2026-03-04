// Cambiar el estilo de un elemento con id="mi-elemento"
//let elemento1 = document.getElementById("mi-elemento");
//elemento.style.color = "white"; // Cambia el color del texto a rojo
//document.body.style.backgroundColor ="blue";

// Acceder a elementos con class="mi-clase"
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos); // Muestra la colección de elementos en la consola

// Modificar el contenido de elementos con class="mi-clase"
let elemento = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elemento.length; i++) {
	elemento[i].innerHTML = "hola mundo";
}

// Cambiar el estilo de elementos con class="mi-clase"
var elemento1 = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elemento1.length; i++) {
	elemento1[i].style.color = "green"; // Cambia el color del texto a rojo
}

let parrafos = document.getElementsByTagName('p');
console.log(parrafos); // Muestra una colección de todos los elementos

let parrafos1 = document.getElementsByTagName('p');
for (let i = 0; i <parrafos1.length; i++) {
	parrafos1[i].innerHTML = 'hola soy karen ' + (i + 1);
}
let parrafos2 = document.getElementsByTagName('p');
for (let i = 0; i < parrafos2.length; i++) {
	parrafos2[i].style.backgroundColor = '#b825a9b3';
    parrafos2[i].style.borderStyle= 'solid';
	parrafos2[i].style.borderWeight = '5px';
    parrafos2[i].style.borderColor = '#53de13';
}

