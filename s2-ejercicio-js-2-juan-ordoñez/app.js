console.log("hola mundo,no funciona")
//4.
/*los template literals son cadenas literales que habilitan el uso de expresiones incrustadas. 
Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.*/


 let resultado1 = (3 + 2) * (10 / 2); // Resultado: 25
 let resultado2 = 3 + 2 * 10 / 2;     // Resultado: 13
 let resultado3 = (3 + 2) * 10 / 2;   // Resultado: 25
 console.log(resultado1)
 console.log(resultado2)
 console.log(resultado3)

//5.
 let texto = "El desarrollo web es lo máximo";
 console.log(texto.charAt(0)); // Imprime "E"
 console.log(texto[14]); // Imprime "w"

 console.log(texto.indexOf("es")); // Imprime 4
 console.log(texto.lastIndexOf("a")); // Imprime 6
 console.log(texto.includes("desarrollo")); // Imprime true

 console.log(texto.replace("máximo", "mejor")); // Imprime "El desarrollo web es lo mejor"
 console.log(texto.replaceAll("e", "E")); // Imprime "El dEsarrollo wEb Es lo máximo"
  
 console.log(texto.toUpperCase()); // Imprime "EL DESARROLLO WEB ES LO MÁXIMO"
 console.log(texto.toLowerCase()); // Imprime “el desarrollo web es lo máximo”
