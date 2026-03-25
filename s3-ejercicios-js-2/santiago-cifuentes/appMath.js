//aleatorio
let numero1 = Math.random() * 10;
console.log("Aleatorio 0-10:", numero1);

//aleatorio 0-10
let numero2 = Math.floor(Math.random() * 11);
console.log("Entero 0-10:", numero2);

//minimo-maximo 
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Entero entre 5 y 15:", numeroAleatorio(5, 15));

//redondeo 
let valor = 4.7;

console.log("Round:", Math.round(valor));
console.log("Ceil:", Math.ceil(valor));
console.log("Floor:", Math.floor(valor));

//potencia
console.log("4^3:", Math.pow(4, 3));
console.log("5^2:", Math.pow(5, 2));
console.log("5^-2:", Math.pow(5, -2));

//raiz cuadrada
console.log("Raíz de 9:", Math.sqrt(9));
console.log("Raíz de 64:", Math.sqrt(64));
console.log("Raíz de 25:", Math.sqrt(25));
