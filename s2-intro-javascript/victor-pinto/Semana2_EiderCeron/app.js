//Ejercicio 2
console.log("Ejercicio 2")
console.log("--VALORES--")
console.log("Hola mundo")
let edad = 18;
console.log(edad)
let nombre = "monday left me broken"
console.log(nombre)
let esMayorEdad = true;
console.log(esMayorEdad)
let moto=null;
console.log(moto)
let feto; 
console.log(feto)
let operacion=0/0
console.log(operacion)
console.log("")


//Ejercicio 4
console.log("Ejercicio 4")
console.log("--OPERACIONES--")
let resultado1 = (3 + 2) * (10 / 2);  //25
let resultado2 = 3 + 2 * 10 / 2; //13
let resultado3 = (3 + 2) * 10 / 2; //25

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log("")



//Ejercicio 5
console.log("Ejercicio 5")
console.log("--METODOS DE BUSQUEDA--")
let texto = "El desarrollo web es lo Maximo";
console.log(`La palabra es: ${texto} `);
console.log("Metodo de Busqueda por Index: "+texto.indexOf("web"));
console.log("Metodo de Busqueda por lastIndex: "+texto.lastIndexOf("o"));
console.log("Metodo de Busqueda por Includes: "+texto.includes("desarrollo"));
console.log("")
console.log("--METODOS DE REEMPLAZO--")
texto = texto.replace("Maximo", "Mejor")
console.log(texto);
texto = texto.replaceAll("o", "u")
console.log(texto);

console.log("")
console.log("--MODIFICACION DEL CASING--")
texto=texto.toUpperCase();
console.log(texto);
texto=texto.toLowerCase();
console.log(texto);
console.log(`La palabra es: ${texto} `);