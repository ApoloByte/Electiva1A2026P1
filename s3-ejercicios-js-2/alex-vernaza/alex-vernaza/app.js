// EJERCICIO 1
let elemento = document.getElementById("mi-elemento");

elemento.innerHTML = "Hola, mundo!";
elemento.style.backgroundColor = "blue";
elemento.style.color = "white";


// EJERCICIO 2
let elementosClase = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementosClase.length; i++) {

    elementosClase[i].innerHTML = "Hola, mundo!";
    elementosClase[i].style.color = "green";

}


// EJERCICIO 3
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {

    parrafos[i].innerHTML = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid black";

}

// EJERCICIO 5 - FUNCIONES

function saludar(nombre){
    return "Hola " + nombre;
}

console.log(saludar("Alex"));

// EJERCICIO 6 - OBJETO MATH

// Número aleatorio entre 0 y 10
console.log("Número aleatorio entre 0 y 10:", Math.random() * 10);

// Entero entre 0 y 10
console.log("Número entero entre 0 y 10:", Math.floor(Math.random() * 11));

// Número entero entre min y max
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número entero entre 1 y 20:", numeroAleatorio(1,20));


// Redondeos
console.log("Redondeo de 4.6 (round):", Math.round(4.6));
console.log("Redondeo hacia arriba de 4.2 (ceil):", Math.ceil(4.2));
console.log("Redondeo hacia abajo de 4.9 (floor):", Math.floor(4.9));


// Potencias
console.log("4 elevado a la 3:", Math.pow(4,3));
console.log("5 elevado a la 2:", Math.pow(5,2));
console.log("5 elevado a la -2:", Math.pow(5,-2));


// Raíces cuadradas
console.log("Raíz cuadrada de 9:", Math.sqrt(9));
console.log("Raíz cuadrada de 64:", Math.sqrt(64));
console.log("Raíz cuadrada de 25:", Math.sqrt(25));