console.log("hola mundo");
let edad = "20";
let nombre = "Paco";
let esMayorDeEdad = true;
let coche = null; 
let direccion; 
let Nan = 0/0;
console.log("mi edad es", edad);
console.log("Mi nombre es", nombre);
console.log(esMayorDeEdad);
console.log(coche);
console.log(direccion);
console.log(Nan);
let resultado = (3 + 2) * (10/2); // Resultado 25
let resultado1 = 3 + 2 * 10/2; // Resultado 13
let resultado2 = (3 + 2) * 10 / 2 //Resultado 25

console.log("El resultado es" , resultado);
console.log("El resultado es" , resultado1);
console.log("El resultado es " , resultado2);

//Indices de los Strings
let texto = "El Desarrollo Web Es Lo Máximo";
console.log("Imprime ", texto.charAt(0)); // imprime "E"
console.log("Imprime", texto[3]); // Imprime "D"

//Métodos de Búsqueda
console.log("Imprime", texto.indexOf("Es")); // Imprime 18

console.log("Imprime",texto.lastIndexOf("D")); // Imprime 3

console.log("Imprime ", texto.includes("Máximo")); // Imprime true

//Métodos de reemplazo 
console.log("Imprime ", texto.replace("Máximo", "Más Cool")); // Imprime El Desarrollo Web Es Lo Más Cool

console.log("Imprime ",texto.replaceAll("E", "e")); // Imprime el Desarrollo Web Es Lo Más Cool

//Modificación del Casing
console.log("Imprime ",texto.toUpperCase()); // Imprime "EL DESARROLLO WEB ES LO MÁXIMO"

console.log("Imprime ",texto.toLowerCase()); // Imprime “el desarrollo web es lo máximo”