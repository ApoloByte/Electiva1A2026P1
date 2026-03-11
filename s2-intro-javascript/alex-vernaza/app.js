console.log("---hola mundo---")
// Operaciones #Ejercicio 4
console.log("---Operaciones---")
let resultado1 = (3 + 2) * (10 / 2); 
let resultado2 = 3 + 2 * 10 / 2; 
let resultado3 = (3 + 2) * 10 / 2; 

console.log(resultado1); 
console.log(resultado2); 
console.log(resultado3); 

// #Ejercicio 5
console.log("---Indices String---")
let texto = "El desarrollo web es lo maximo";

console.log(texto.charAt(14)); // Imprime "w"
console.log(texto[3]); // Imprime "d"

// Metodos de busqueda
console.log("---Metodos de busqueda---");
console.log(texto.indexOf("lo")); // Imprime 11
console.log(texto.lastIndexOf("web")); // Imprime 14
console.log(texto.includes("El")); // Imprime true

// Metodos de reemplazo
console.log("---Metodos de reemplazo---");
console.log(texto.replace("maximo", "mejor")); // Imprime "El desarrollo web es lo mejor"
console.log(texto.replaceAll("e", "E")); // Imprime "El dEsarrollo wEb es lo maximo"

// Modificacion del casing
console.log("---Modificacion del casing---")
console.log(texto.toUpperCase()); // Imprime "EL DESARROLLO WEB ES LO MAXIMO"
console.log(texto.toLowerCase()); // Imprime "el desarrollo web es lo maximo”