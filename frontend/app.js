console.log("hola mundo")

let resultado1 = (3 + 2) * (10 / 2);
console.log(resultado1)

let resultado2 = 3 + 2 * 10 / 2;
console.log(resultado2)

let resultado3 = (3 + 2) * 10 / 2;
console.log(resultado3)

let edad = 15
let nombre = "juan"
let blanco = false
let moto = null
let telefono;
let resultado = 0/0

console.log(edad);
console.log(nombre);
console.log(blanco);
console.log(moto);
console.log(telefono);
console.log(resultado);


let texto = "El desarrollo web es lo maximo"

//Busqueda
console.log(texto.indexOf("es")); //imprime 4

console.log(texto.lastIndexOf("a")); //imprime 25

console.log(texto.includes("web")); //imprime true

//Reemplazo
console.log(texto.replace("maximo", "")); //imprime el desarrollo web es lo
console.log(texto.replaceAll("a", "A")); //imprime el desArrollo web es lo mAximo

//Casing
console.log(texto.toUpperCase()); //Imprime "EL DESARROLLO WEB ES LO MAXIMO"
console.log(texto.toLowerCase());//Imprime "el desarrollo web es lo maximo"