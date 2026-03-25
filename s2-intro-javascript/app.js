let resultado1 = (3 + 2) * (10 / 2);
let resultado2 = 3 + 2 * 10 / 2;
let resultado3 = (3 + 2) * 10 / 2;


document.getElementById("resultado1").textContent = 
    "Resultado 1: " + resultado1;

document.getElementById("resultado2").textContent = 
    "Resultado 2: " + resultado2;

document.getElementById("resultado3").textContent = 
    "Resultado 3: " + resultado3;



let frase1 = "El desarrollo web es lo máximo";
let frase2 = "La integracion en la web es lo maximo";
let frase3 = "Malditos negros";

let resultadosString = `
Incluye 'web': ${frase1.includes("web")} <br>
Posición de 'web': ${frase1.indexOf("web")} <br>
Ultima Posición de la 'web': ${frase1.lastIndexOf("i")} <br>

Reemplazo: ${frase2.replace("máximo", "increíble")} <br>
Remplazo completo: ${frase2.replaceAll("o", "O")} <br>

Mayúsculas: ${frase3.toUpperCase()} <br>

`;
let frase = "El desarrollo web es lo maximo";

console.log("Frase original:", frase);


frase = frase.replace("maximo", "increible");
console.log("Después de replace:", frase);


frase = frase.replaceAll("o", "O");
console.log("Después de replaceAll:", frase);


frase = frase.toUpperCase();
console.log("Después de toUpperCase:", frase);


frase = frase.toLowerCase();
console.log("Después de toLowerCase:", frase);





document.getElementById("stringResultados").innerHTML = resultadosString;




