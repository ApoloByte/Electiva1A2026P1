console.log("hola mundo")

console.log("OPERACIONES");
let resultado1 = (3 + 2) * (10 / 2); // Resultado: ?
let resultado2 = 3 + 2 * 10 / 2; // Resultado: ?
let resultado3 = (3 + 2) * 10 / 2; // Resultado: ?
console.log( "Resultado 1: " + resultado1 + "\n" +"Resultado 2: " + resultado2 + "\n" +"Resultado 3: " + resultado3);

console.log("INDICES DE LOS STRING");
let texto = "El desarollo web es lo maximo";
console.log(texto.charAt(0)); // Imprime "E"
console.log(texto[4]); // Imprime "e"

// Metodos de busqueda
console.log("METODOS DE BUSQUEDA");
console.log(texto.indexOf("de")); // Imprime "3"
console.log(texto.lastIndexOf("E")); // Imprime "0"
console.log(texto.includes("web")) // Imprime "True"

// Metodos de remplazo
console.log("METODOS DE REMPLAZO");
console.log(texto.replace("maximo","Genial")); // Cambia "Maximo" por "genial"pre
console.log(texto.replaceAll("a","A")); // Cambia las "a" por "A"

// Modificacion del Casing
console.log("MEDIFICACION DEL CASING");
console.log(texto.toUpperCase()); // Cambia todo el texto a MAYUSCULAS
console.log(texto.toLocaleLowerCase()); // Cambia todo el texto a minusculas



