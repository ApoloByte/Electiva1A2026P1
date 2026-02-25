//POR ID
let elemento = document.getElementById("mi-elemento");
elemento.innerHTML = "Hola, mundo!";//modifica
elemento.style.color = "Blue"; // Cambia el color del texto a rojo
console.log(elemento); // Muestra el elemento en la consola

//Por CLASES

var elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "green"; // Cambia el color del texto a rojo
}
for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "Hola, mundo!"; //MODIFICA
}
console.log(elementos); // Muestra la colección de elementos en la consola

//POR ETIQUETAS
let parrafos = document.getElementsByTagName('p');

for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'Hola mundo ' + (i + 1); //MODIFICAR
}

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.backgroundColor = 'yellow'; //CAMBIO COLOR Y FUENTE
	parrafos[i].style.fontWeight = 'bold';
}

console.log(parrafos); // Muestra una colección de todos los elementos