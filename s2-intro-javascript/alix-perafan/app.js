//PUNTO 2
let edad=20;
    console.log(edad);
let nombre = "Alix";
    console.log(nombre);
let esEstudiante= true;
    console.log(esEstudiante);
let casa= null;
    console.log(casa);
let direccion= undefined;
    console.log(direccion);
let resultado = 0 / 0;
  console.log(resultado);

  //PUNTO 5
let resultado1 = (3 + 2) * (10 / 2);
    console.log(resultado1);
let resultado2 = 3 + 2 * 10 / 2; 
    console.log(resultado2);
let resultado3 = (3 + 2) * 10 / 2;
    console.log(resultado3);

//PUNTO 6
let texto =" El desarrollo web es lo máximo";


    //BUSQUEDA
console.log(texto.indexOf("es")); // Imprime 4

console.log(texto.lastIndexOf("x")); // Imprime 22

console.log(texto.includes("wed")); // Imprime true

    //REEMPLAZO
console.log(texto.replace("máximo", "nuevo")); // Imprime "El desarrollo web es lo nuevo"

console.log(texto.replaceAll("o", "O")); // Imprime " El desarrollo web es lo mAximo"

    //NOTIFICACION
console.log(texto.toUpperCase()); // Imprime "EL DESARROLLO WEB ES LO MÁXIMO"

console.log(texto.toLowerCase()); // Imprime " el desarrollo web es lo máximo"