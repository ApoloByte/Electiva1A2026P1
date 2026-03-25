// Función para imprimir en consola y en el HTML
function imprimir(mensaje) {
    console.log(mensaje);
    document.getElementById("resultados").innerHTML += mensaje + "<br>";
}

// 1️ TIPOS PRIMITIVOS

let numero = 10;
let texto = "Hola mundo";
let booleano = true;
let indefinido;
let nulo = null;
let simbolo = Symbol("id");
let grande = 12345678901234567890n;

imprimir(" TIPOS PRIMITIVOS ");
imprimir("Number: " + numero);
imprimir("String: " + texto);
imprimir("Boolean: " + booleano);
imprimir("Undefined: " + indefinido);
imprimir("Null: " + nulo);
imprimir("Symbol: " + simbolo.toString());
imprimir("BigInt: " + grande);

// 2️ ORDEN DE OPERACIONES

let resultado1 = (3 + 2) * (10 / 2);
let resultado2 = 3 + 2 * 10 / 2;
let resultado3 = (3 + 2) * 10 / 2;

imprimir("<br>ORDEN DE OPERACIONES");
imprimir("Resultado 1: " + resultado1);
imprimir("Resultado 2: " + resultado2);
imprimir("Resultado 3: " + resultado3);

// 3️ MANIPULACIÓN DE STRINGS

let frase = "El desarrollo web es lo máximo";

imprimir("<br> MANIPULACIÓN DE STRINGS");
imprimir("Frase original: " + frase);

// Búsqueda
imprimir("Incluye web: " + frase.includes("web"));
imprimir("Posición de 'web': " + frase.indexOf("web"));

// Reemplazo
let nuevaFrase = frase.replace("máximo", "increíble");
imprimir("Reemplazo: " + nuevaFrase);

// Mayúsculas y minúsculas
imprimir("Mayúsculas: " + frase.toUpperCase());
imprimir("Minúsculas: " + frase.toLowerCase());

// Substring
imprimir("Subcadena (0-13): " + frase.substring(0, 13));

// 4️ TEMPLATE LITERALS

let lenguaje = "JavaScript";
let mensaje = `Estoy aprendiendo ${lenguaje} y ${frase}`;

imprimir("<br>=== TEMPLATE LITERALS ===");
imprimir(mensaje);
