
// DOM BÁSICO

// 1. POR ID
let elemento = document.getElementById("mi-elemento");
elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";
elemento.style.color = "white";

// 2. POR CLASE
let elementosClase = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementosClase.length; i++) {
    elementosClase[i].textContent = "Hola, mundo!";
    elementosClase[i].style.color = "green";
}

// 3. POR ETIQUETA
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid black";
}


// OBJETO MATH


console.log("Aleatorio 0-10:", Math.random() * 10);

console.log("Entero 0-10:", Math.floor(Math.random() * 11));

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Entre 5 y 15:", aleatorio(5, 15));

// Redondeo
console.log("Round:", Math.round(4.6));
console.log("Ceil:", Math.ceil(4.2));
console.log("Floor:", Math.floor(4.9));

// Potencias
console.log("4^3:", Math.pow(4, 3));
console.log("5^2:", Math.pow(5, 2));
console.log("5^-2:", Math.pow(5, -2));

// Raíces
console.log("√9:", Math.sqrt(9));
console.log("√64:", Math.sqrt(64));
console.log("√25:", Math.sqrt(25));