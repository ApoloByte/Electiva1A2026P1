//  TIPOS PRIMITIVOS EN JAVASCRIPT

let nombre    = "Santiago Camayo";          // String
let edad      = 20;                    // Number
let precio    = 99.95;                 // Number (decimal)
let activo    = true;                  // Boolean
let nulo      = null;                  // Null
let indefinido;                        // Undefined
let simbolo   = Symbol("id");         // Symbol
let enteroGrande = 9007199254740993n; // BigInt

console.log("=== TIPOS PRIMITIVOS ===");
console.log(`String   → nombre      :`, nombre);
console.log(`Number   → edad        :`, edad);
console.log(`Number   → precio      :`, precio);
console.log(`Boolean  → activo      :`, activo);
console.log(`Null     → nulo        :`, nulo);
console.log(`Undefined→ indefinido  :`, indefinido);
console.log(`Symbol   → simbolo     :`, simbolo.toString());
console.log(`BigInt   → enteroGrande:`, enteroGrande);


//  EJERCICIO 1 — PRECEDENCIA DE OPERADORES

console.log("\n=== EJERCICIO 1: PRECEDENCIA DE OPERADORES ===");

let resultado1 = (3 + 2) * (10 / 2);
console.log(`(3 + 2) * (10 / 2) = ${resultado1}`);   // 25

let resultado2 = 3 + 2 * 10 / 2;
console.log(`3 + 2 * 10 / 2     = ${resultado2}`);   // 13

let resultado3 = (3 + 2) * 10 / 2;
console.log(`(3 + 2) * 10 / 2   = ${resultado3}`);   // 25


//  EJERCICIO 2 — MÉTODOS DE STRING

console.log("\n=== EJERCICIO 2: MÉTODOS DE STRING ===");

let frase = "El desarrollo web es lo máximo";
console.log(`Frase original : "${frase}"`);

//  BÚSQUEDA 

// indexOf → posición de la primera coincidencia (-1 si no existe)
console.log(`\n-- Búsqueda --`);
console.log(`indexOf("web")          : ${frase.indexOf("web")}`);
console.log(`indexOf("python")       : ${frase.indexOf("python")}`);

// lastIndexOf → última aparición
console.log(`lastIndexOf("o")        : ${frase.lastIndexOf("o")}`);

// includes → devuelve true / false
console.log(`includes("máximo")      : ${frase.includes("máximo")}`);
console.log(`includes("frontend")    : ${frase.includes("frontend")}`);

// startsWith / endsWith
console.log(`startsWith("El")        : ${frase.startsWith("El")}`);
console.log(`endsWith("máximo")      : ${frase.endsWith("máximo")}`);

// search → acepta expresión regular, devuelve índice
console.log(`search(/web/i)          : ${frase.search(/web/i)}`);

// match → devuelve arreglo con coincidencias
const coincidencias = frase.match(/\b\w{3}\b/g); // palabras de 3 letras
console.log(`match(palabras 3 letras): ${coincidencias}`);


//  REEMPLAZO 
console.log(`\n-- Reemplazo --`);

// replace → reemplaza primera coincidencia
console.log(`replace("web","frontend")   : "${frase.replace("web", "frontend")}"`);

// replaceAll → reemplaza todas las coincidencias
let conRepeticion = "El el EL mundo el";
console.log(`replaceAll("el","LA")       : "${conRepeticion.replaceAll("el", "LA")}"`);

// replace con regex e ignorar mayúsculas (flag i)
console.log(`replace /el/gi → "un"      : "${conRepeticion.replace(/el/gi, "un")}"`);


//  MODIFICACIÓN DE CASING 
console.log(`\n-- Casing --`);

console.log(`toUpperCase() : "${frase.toUpperCase()}"`);
console.log(`toLowerCase() : "${frase.toLowerCase()}"`);

// toLocaleLowerCase / toLocaleUpperCase (respeta la localización)
console.log(`toLocaleUpperCase() : "${frase.toLocaleUpperCase("es-CO")}"`);
console.log(`toLocaleLowerCase() : "${frase.toLocaleLowerCase("es-CO")}"`);

// Capitalize primera letra (no es nativo, se construye)
const capitalizada = frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase();
console.log(`Capitalize          : "${capitalizada}"`);


//  OTROS MÉTODOS ÚTILES 
console.log(`\n-- Otros métodos útiles --`);

// slice extrae un fragmento
console.log(`slice(3, 13)    : "${frase.slice(3, 13)}"`);

// substring → similar a slice, sin índices negativos
console.log(`substring(3,13) : "${frase.substring(3, 13)}"`);

// trim / trimStart / trimEnd - eliminar espacios
let conEspacios = "   hola mundo   ";
console.log(`trim()          : "${conEspacios.trim()}"`);
console.log(`trimStart()     : "${conEspacios.trimStart()}"`);
console.log(`trimEnd()       : "${conEspacios.trimEnd()}"`);

// split convierte en arreglo
console.log(`split(" ")      :`, frase.split(" "));

// repeat
console.log(`"Ja".repeat(4)  : "${"Ja".repeat(4)}"`);

// padStart / padEnd
let numero = "42";
console.log(`padStart(6,"0") : "${numero.padStart(6, "0")}"`);
console.log(`padEnd(6,".")   : "${numero.padEnd(6, ".")}"`);

// Template literal multi-línea
const resumen = `
Frase         : "${frase}"
Longitud      : ${frase.length} caracteres
En mayúsculas : "${frase.toUpperCase()}"
Contiene "web": ${frase.includes("web")}`;
console.log(resumen);
