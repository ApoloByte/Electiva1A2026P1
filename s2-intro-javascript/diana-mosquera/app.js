//VARIABLES PRIMITIVAS
console.log("Este es un mensaje de prueba."); // Imprime un mensaje en la consola del navegador

console.error("Este es un mensaje de error."); // Imprime un mensaje de error en la consola

console.warn("Este es un mensaje de advertencia."); // Imprime un mensaje de advertencia en la consola

let nombreEstudiante= "Diana"; // Declaramos una variable llamada nombreEstudiante y le asignamos el valor "Diana"
let edadEstudiante= 23; // Declaramos una variable llamada edadEstudiante y le asignamos el valor 23
console.log(nombreEstudiante, edadEstudiante);  // Imprime el valor de las variables nombreEstudiante y edadEstudiante en la consola

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
console.log(texto.indexOf("e")); //devuelve la posicion de la primera ocurrencia
console.log(texto.lastIndexOf("l")); //devuelve la posicion de la ultima ocurrencia
console.log(texto.includes("web")); //devuelve true si el texto contiene la palabra "web", de lo contrario devuelve false
//reemplazo 
console.log(texto.replace("el","LA")); //reemplaza la primera ocurrencia de "el" por "LA"
console.log(texto.replaceAll("l","r")); //reemplaza todas las ocurrencias de "l" por "r"
//casing
console.log(texto.toUpperCase()); //convierte el texto a mayusculas
console.log(texto.toLowerCase()); //convierte el texto a minusculas