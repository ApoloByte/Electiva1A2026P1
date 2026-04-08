
// 1. TIPOS PRIMITIVOS


let numero = 10; // Number
let texto = "Hola mundo"; // String
let booleano = true; // Boolean
let indefinido; // Undefined
let nulo = null; // Null
let simbolo = Symbol("id"); // Symbol
let bigint = 1234567890123456789012345678901234567890n; // BigInt

console.log("=== TIPOS PRIMITIVOS ===");
console.log("Number:", numero);
console.log("String:", texto);
console.log("Boolean:", booleano);
console.log("Undefined:", indefinido);
console.log("Null:", nulo);
console.log("Symbol:", simbolo);
console.log("BigInt:", bigint);



// 2. OPERACIONES


let resultado1 = (3 + 2) * (10 / 2);
let resultado2 = 3 + 2 * 10 / 2;
let resultado3 = (3 + 2) * 10 / 2;

console.log("\n=== OPERACIONES ===");
console.log("Resultado 1:", resultado1); // 25
console.log("Resultado 2:", resultado2); // 13
console.log("Resultado 3:", resultado3); // 25



// 3. STRINGS

let frase = "El desarrollo web es lo máximo";

console.log("\n=== STRINGS ===");

// Búsqueda
console.log("Incluye 'web':", frase.includes("web"));
console.log("Posición de 'web':", frase.indexOf("web"));

// Reemplazo
let reemplazo = frase.replace("máximo", "increíble");
console.log("Reemplazo:", reemplazo);

// Mayúsculas
console.log("Mayúsculas:", frase.toUpperCase());

// Minúsculas
console.log("Minúsculas:", frase.toLowerCase());


// 4. TEMPLATE LITERALS


console.log("\n=== TEMPLATE LITERALS ===");

let mensaje = `La frase es: "${frase}" y tiene ${frase.length} caracteres`;

console.log(mensaje);