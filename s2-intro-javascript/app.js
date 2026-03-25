// 1. TIPOS PRIMITIVOS
let texto = "Hola programadores primer pagina";   
let numero = 25;                 
let booleano = true;             
let indefinido;                  
let nulo = null;                 
let simbolo = Symbol("id");      


// 2. ORDEN DE OPERACIONES
let resultado1 = (3 + 2) * (10 / 2);
let resultado2 = 3 + 2 * 10 / 2;
let resultado3 = (3 + 2) * 10 / 2;

console.log("=== ORDEN DE OPERACIONES ===");
console.log(`Resultado 1: ${resultado1}`);
console.log(`Resultado 2: ${resultado2}`);
console.log(`Resultado 3: ${resultado3}`);

// 3. MANIPULACION DE STRINGS
let frase = "El desarrollo web es lo máximo";
console.log("=== STRING METHODS ===");

// Búsqueda
console.log(`Incluye "web": ${frase.includes("web")}`);
console.log(`Posición de "web": ${frase.indexOf("web")}`);

// Reemplazo
let reemplazo = frase.replace("lo máximo", "increíble");
console.log(`Reemplazo: ${reemplazo}`);

// Mayúsculas y minúsculas
console.log(`Mayúsculas: ${frase.toUpperCase()}`);
console.log(`Minúsculas: ${frase.toLowerCase()}`);

// 4. TEMPLATE LITERALS
let lenguaje = "JavaScript";
let mensaje = `Estoy aprendiendo ${lenguaje} y es muy potente`;

console.log("=== TEMPLATE LITERALS ===");
console.log(mensaje);


