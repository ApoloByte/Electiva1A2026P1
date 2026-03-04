//PARTE 1
let edad = "19";
let nombre = "Juan";
let esMayorDeEdad = true;
let moto = null;
let direccion;
let Nan = 0/0;

console.log("Edad: ", edad);
console.log("Nombre: ", nombre);
console.log("Mayor de Edad: ", esMayorDeEdad);
console.log("Hay moto: ", moto);
console.log("Direccion: ", direccion);
console.log("Divison por cero: ", Nan);


//PARTE 2
let resultado1 = (3 + 2) * (10 / 2); //RESULTADO 25
let resultado2 = 3 + 2 * 10 / 2; // RESULTADO 13
let resultado3 = (3 + 2) * 10 / 2; // RESULTADO 25

console.log("Resultado 1: ", resultado1);
console.log("Resultado 2: ", resultado2);
console.log("Resutlado 3: ", resultado3);

//PARTE 3
console.log("TEXTO")
let texto = "El desarrollo web es lo maximo"
console.log(texto);

//BUSQUEDA
console.log(texto.indexOf("web"));
console.log(texto.lastIndexOf("o"));
console.log(texto.includes("maximo"));

//REEMPLAZO
console.log(texto.replace("maximo", "mejor"));
console.log(texto.replaceAll("o", "O"));

//CASING
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());