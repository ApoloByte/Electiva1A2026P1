/**
 * EJERCICIO 1: TIPOS PRIMITIVOSS
 * Declaración de variables de cada tipo básico.
 */
console.log("--- 1. EJERCICIO: TIPOS PRIMITIVOS ---");

const nombre = "Julio";                // String
const edad = 25;                       // Number
const esEstudiante = true;             // Boolean
let valorIndefinido;                   // Undefined
const cajaVacia = null;                // Null
const simboloUnico = Symbol("id");     // Symbol
const granEntero = 9007199254740991n;  // BigInt

console.log("String:", nombre);
console.log("Number:", edad);
console.log("Boolean:", esEstudiante);
console.log("Undefined:", valorIndefinido);
console.log("Null:", cajaVacia);
console.log("Symbol:", simboloUnico.toString());
console.log("BigInt:", granEntero);

console.log("\n"); // Espacio en consola

/**
 * EJERCICIO 2: ORDEN DE OPERACIONES (PEMDAS)
 * Análisis y verificación de resultados.
 */
console.log("--- 2. EJERCICIO: ORDEN DE OPERACIONES ---");

// resultado1: (3+2)=5 * (10/2)=5 -> 5 * 5 = 25
let resultado1 = (3 + 2) * (10 / 2); 
console.log("Resultado 1 (Esperado: 25):", resultado1);

// resultado2: 2*10=20 -> 20/2=10 -> 3+10 = 13
let resultado2 = 3 + 2 * 10 / 2; 
console.log("Resultado 2 (Esperado: 13):", resultado2);

// resultado3: (3+2)=5 -> 5*10=50 -> 50/2 = 25
let resultado3 = (3 + 2) * 10 / 2; 
console.log("Resultado 3 (Esperado: 25):", resultado3);

console.log("\n"); // Espacio en consola

/**
 * EJERCICIO 3: MANIPULACIÓN DE STRINGS
 * Métodos de búsqueda, reemplazo y casing.
 */
console.log("--- 3. EJERCICIO: MANIPULACIÓN DE STRINGS ---");

let frase = "El desarrollo web es lo máximo";
console.log("Frase original:", frase);

// Búsqueda
console.log("Índice de 'web':", frase.indexOf("web"));
console.log("¿Incluye 'máximo'?:", frase.includes("máximo"));

// Reemplazo
console.log("Reemplazo:", frase.replace("máximo", "increíble"));
console.log("Reemplazo de letras (a -> A):", frase.replaceAll("a", "A"));

// Modificación del Casing
console.log("Mayúsculas:", frase.toUpperCase());
console.log("Minúsculas:", frase.toLowerCase());

// Acceso por índice
console.log("Carácter en índice 0 (charAt):", frase.charAt(0));
console.log("Carácter en índice 4 ([]):", frase[4]);