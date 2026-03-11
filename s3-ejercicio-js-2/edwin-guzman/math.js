//numero aleatroio entre 0 y 1
console.log(Math.random());

//numero aleatorio entre 0 y 10
console.log(Math.floor(Math.random() * 11));

// Generar un número entero aleatorio entre dos valores (mínimo y máximo).
function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// número aleatorio entre 10 y 29
const aleatorio = numeroAleatorioEntre(10, 29);
console.log(aleatorio);


// Funcion de redondeo round
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.round(-4.3)); // -4
console.log(Math.round(-4.7)); // -5

// Funcion de redondeo ceil
console.log(Math.ceil(12.3)); // 13
console.log(Math.ceil(12.7)); // 13
console.log(Math.ceil(-9.3)); // -9
console.log(Math.ceil(-9.7)); // -9

// Funcion de redondeo floor
console.log(Math.floor(7.3)); // 7
console.log(Math.floor(7.7)); // 7
console.log(Math.floor(-11.3)); // -12
console.log(Math.floor(-11.7)); // -12

// Potencias utilizando el objeto Math
console.log(Math.pow(4, 3)); 
console.log(Math.pow(5, 2)); 
console.log(Math.pow(5, -2));

// Raiz cuadrada
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.sqrt(25));