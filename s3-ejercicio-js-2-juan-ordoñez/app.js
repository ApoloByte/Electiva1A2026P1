//ejercicio 1
let elemento = document.getElementById("mi-elemento");

elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";
elemento.style.color = "white";
//ejercicio 2
let clases = document.getElementsByClassName("mi-clase");

for (let i = 0; i < clases.length; i++) {
    clases[i].textContent = "Hola, mundo!";
    clases[i].style.color = "green";
}
//ejercicio 3
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid black";
}
//ejercicio funcion math
// 1. Número aleatorio entre 0 y 10
let num1 = Math.random() * 10;
console.log("Aleatorio 0-10:", num1);


// 2. Número entero aleatorio entre 0 y 10
let num2 = Math.floor(Math.random() * 11);
console.log("Entero 0-10:", num2);


// 3. Número entero aleatorio entre mínimo y máximo
let min = 5;
let max = 20;

let num3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Entero entre 5 y 20:", num3);


// 4. Funciones de redondeo
let numero = 4.7;

// redondea normal
console.log("Round:", Math.round(numero)); 
// redondea hacia arriba
console.log("Ceil:", Math.ceil(numero)); 
// redondea hacia abajo
console.log("Floor:", Math.floor(numero));


// 5. Potencias
console.log("4^3 =", Math.pow(4,3));
console.log("5^2 =", Math.pow(5,2));
console.log("5^-2 =", Math.pow(5,-2));


// 6. Raíces cuadradas
console.log("Raíz de 9 =", Math.sqrt(9));
console.log("Raíz de 64 =", Math.sqrt(64));
console.log("Raíz de 25 =", Math.sqrt(25));