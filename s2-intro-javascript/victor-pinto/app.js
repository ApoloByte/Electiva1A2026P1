let edad = 26;
let nombre = "Sebastian";
let esMayorDeEdad = true;
let novia = null;
let direccion;
let division = 0 / 0;

console.log("Variables tipo Number",edad);
console.log("Variables tipo String",nombre);
console.log("Variables tipo Boolean",esMayorDeEdad);
console.log("Variables tipo Null",novia);
console.log("Variables tipo Undifined",direccion);
console.log("Variables tipo NaN",division);

let resultado1 = (3 + 2) * (10 / 2); // 25
let resultado2 = 3 + 2 * 10 / 2; // 13
let resultado3 = (3 + 2) * 10 / 2; // 25

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

let texto = "El desarrollo Web es lo maximo";

//Busqueda
console.log(texto.indexOf("w"));
console.log(texto.lastIndexOf("x"));
console.log(texto.includes("lo"));

//Remplazo
console.log(texto.replace("maximo", "mas chimba"));
console.log(texto.replaceAll("o","a"));

//Casing
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());