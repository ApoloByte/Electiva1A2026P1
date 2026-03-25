// 5
let resultado1 = (3 + 2) * (10 / 2);
console.log("Resultado 1:", resultado1); 
// (3 + 2) = 5
// (10 / 2) = 5
// 5 * 5 = 25

let resultado2 = 3 + 2 * 10 / 2;
console.log("Resultado 2:", resultado2);
// 2 * 10 = 20
// 20 / 2 = 10
// 3 + 10 = 13

let resultado3 = (3 + 2) * 10 / 2;
console.log("Resultado 3:", resultado3);
// (3 + 2) = 5
// 5 * 10 = 50
// 50 / 2 = 25

// 6

let texto = "El desarrollo web es lo maximo";

console.log("Texto original:", texto);

//  Métodos de búsqueda
console.log("Incluye 'web':", texto.includes("web"));
console.log("Posición de 'web':", texto.indexOf("web"));

// Reemplazo
let textoReemplazado = texto.replace("máximo", "increíble");
console.log("Texto reemplazado:", textoReemplazado);

// Modificación de mayúsculas y minúsculas
console.log("Todo en mayúsculas:", texto.toUpperCase());
console.log("Todo en minúsculas:", texto.toLowerCase());

//  Extraer parte del texto desde la pos 3 a la 14
console.log("Substring (3, 14):", texto.substring(3, 14));

//  Longitud del texto
console.log("Longitud del texto:", texto.length);