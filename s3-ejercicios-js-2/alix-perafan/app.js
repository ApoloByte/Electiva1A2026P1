//PUNTO 1

// Acceder a un elemento"
let elemento = document.getElementById("mi-elemento");
 console.log(elemento); // Muestra el elemento en la consola

// Modificar"
elemento = document.getElementById("mi-elemento");
elemento.innerHTML = "Hola,mundo!";

// Cambia el color del fondo del elemento a azul.
elemento = document.getElementById("mi-elemento");
elemento.style.color = "blue"; // Cambia el color del texto a azul



//PUNTO 2
// Acceder a elementos con class="mi-clase"
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos); // Muestra la colección de elementos en la consola

// Modificar 
 elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "Hola, mundo!";
}
// Cambiar el estilo 
elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "green"; // Cambia el color del texto a verde
}

//PUNTO 3
let parrafos = document.getElementsByTagName('p');
console.log(parrafos); // Muestra una colección de todos los elementos

parrafos = document.getElementsByTagName('p');
for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = "Hola Mundo" + (i + 1);
}
parrafos = document.getElementsByTagName('p');

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.backgroundColor = 'yellow';
    parrafos[i].style.border = '1px solid black';
}


//OBJETO MATH
// 1. Número aleatorio entre 0 y 10
let num1 = Math.random() * 10;
console.log("Aleatorio 0-10:", num1);

// 2. Número entero entre 0 y 10
let num2 = Math.floor(Math.random() * 11);
console.log("Entero 0-10:", num2);

// 3. Número entre mínimo y máximo
let min = 5;
let max = 20;
let num3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Entre 5 y 20:", num3);

// 4. Redondeos
let numero = 4.7;

console.log("Round:", Math.round(numero));
console.log("Ceil:", Math.ceil(numero));
console.log("Floor:", Math.floor(numero));

// 5. Potencias
console.log("4^3 =", Math.pow(4,3));
console.log("5^2 =", Math.pow(5,2));
console.log("5^-2 =", Math.pow(5,-2));

// 6. Raíces cuadradas
console.log("Raíz de 9 =", Math.sqrt(9));
console.log("Raíz de 64 =", Math.sqrt(64));
console.log("Raíz de 25 =", Math.sqrt(25));