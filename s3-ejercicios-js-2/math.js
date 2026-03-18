// Ejercicios Math
const num1 = Math.random() * 10;
console.log("Aleatorio 0-10:", num1);

const num2 = Math.floor(Math.random() * 11);
console.log("Entero 0-10:", num2);

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Entre 1 y 20:", numeroAleatorio(1, 20));

const numero = 4.7;
console.log("round:", Math.round(numero));
console.log("ceil:", Math.ceil(numero));
console.log("floor:", Math.floor(numero));

console.log("4^3:", Math.pow(4, 3));
console.log("5^2:", Math.pow(5, 2));
console.log("5^-2:", Math.pow(5, -2));

console.log("√9:", Math.sqrt(9));
console.log("√64:", Math.sqrt(64));
console.log("√25:", Math.sqrt(25));