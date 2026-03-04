//VARIABLES PRIMITIVAS
console.log("Este es un mensaje de prueba.");

console.error("Este es un mensaje de error.");

console.warn("Este es un mensaje de advertencia.");

let nombreEstudiante= "Diana";
let edadEstudiante= 23;
console.log(nombreEstudiante, edadEstudiante);

//ejercicio suma 
let numero1=3;
let numero2=2;
let numero3=10;
//let resultado1 = (3 + 2) * (10 / 2); // Resultado: ?
resultado1= (numero1 + numero2) * (numero3 / numero2);
console.log(resultado1);

//let resultado2 = 3 + 2 * 10 / 2; // Resultado: ?
resultado2= numero1 + numero2* numero3 / numero2; 
console.log(resultado2);

//let resultado3 = (3 + 2) * 10 / 2; // Resultado: ?
resultado3= (numero1 + numero2) * numero3 / numero2;
console.log(resultado3);

let texto="El desarrollo web es lo maximo";
//busqueda
console.log(texto.indexOf("e"));
console.log(texto.lastIndexOf("l"));
console.log(texto.includes("web"));
//reemplazo 
console.log(texto.replace("el","LA"));
console.log(texto.replaceAll("l","r"));
//casing
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());