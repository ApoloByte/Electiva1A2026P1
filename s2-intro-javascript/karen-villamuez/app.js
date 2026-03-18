console.log("hola ");
//estas son las variables primitivas 
console.error("Este es un mensaje de error.");

console.warn("Este es un mensaje de advertencia.")

let nombreEstudiante = "lucas";
3
let edad = 5; 

console.log("el nombre es ",nombreEstudiante,"la edad es ",edad);
// declarar las variables 

let numero1 = 3;
let numero2 = 2;
let numero3 = 10;

//a.let resultado1 = (3 + 2) * (10 / 2); // Resultado: 
let resultado1  = (numero1 + numero2) * (numero3 / numero2);
// let resultado2 = 3 + 2 * 10 / 2; // Resultado: ?
let resultado2  = numero1 + numero2 * numero3/numero2;
//let resultado3 = (3 + 2) * 10 / 2; // Resultado: ?
let resultado3 =(numero1 + numero2) * numero3 / numero2;

//mostrar resultado
console.log("el resultado 1 es:",resultado1);
console.log("el resultado 2 es:",resultado2);
console.log("el resultado 3 es:",resultado3);

////////////////////////////////////////
let texto = "El desarrollo web es lo máximo";

// metodos de busqueda 
console.log("el caracter numero 5 ");
console.log(texto[5]);
console.log("muestra la primera posicion de la subcadena");
console.log(texto.indexOf("sa"));
console.log("muestra la ultima posicion de la  subcadena");
console.log(texto.lastIndexOf("a"));
console.log("miro si esta palabra se encuentra en la cadena texto");
console.log(texto.includes("web"));

//para reemplazar 
console.log(texto.replace("web", "increíble"));

//  Modificación del Casing:
console.log(texto.toUpperCase()); // Imprime "JAVASCRIPT"
console.log(texto.toLowerCase()); // Imprime “javascript”

