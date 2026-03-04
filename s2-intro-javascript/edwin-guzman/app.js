console.log("Hola Mundo");

// Tipos primitivos
let numero = 42;                      // Number
let texto = "Hola, mundo";            // String
let booleano = true;                  // Boolean
let indefinido;                       // Undefined
let nulo = null;                      // Null
let enteroGrande = 9007199254740991n; // BigInt
let simbolo = Symbol("id");           // Symbol

// Mostrar valores en consola
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);
console.log("Entero grande (BigInt):", enteroGrande);
console.log("Símbolo:", simbolo);

// Orden de operaciones
let resultado1 = (3 + 2) * (10 / 2);
let resultado2 = 3 + 2 * 10 / 2;
let resultado3 = (3 + 2) * 10 / 2;

console.log("Resultado1:", resultado1);
console.log("Resultado2:", resultado2);
console.log("Resultado3:", resultado3);

// indices de los String
let texto1 = "El desarrollo web es lo maximo";

console.log(texto1.charAt(0)); // Imprime E
console.log(texto1[4]); // Imprime d

// Metodos de Busqueda
console.log(texto1.indexOf("o")); // Imprime 9
console.log(texto1.lastIndexOf("o")); // Imprime 29
console.log(texto1.includes("maximo")); // Imprime true

// Metodos de reemplazo
console.log(texto1.replace("maximo", "mejor")); // Imprime "El desarrollo web es lo mejor"
console.log(texto1.replaceAll("a", "A")); // Imprime " El desArrollo web es lo mAximo"

// Modificacion del Casing
console.log(texto1.toUpperCase()); // Imprime "todo mayuscula"
console.log(texto1.toLowerCase()); // Imprime "todo minuscula"