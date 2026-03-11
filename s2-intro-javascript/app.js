// Orden de operaciones
const resultado1 = (3 + 2) * (10 / 2); // (5) * (5) = 25
const resultado2 = 3 + 2 * 10 / 2;     // 3 + ((2*10)/2) = 3 + 10 = 13
const resultado3 = (3 + 2) * 10 / 2;   // (5) * 10 / 2 = 50 / 2 = 25

console.log('Resultado1 ((3+2)*(10/2)) =', resultado1);
console.log('Resultado2 (3+2*10/2) =', resultado2);
console.log('Resultado3 ((3+2)*10/2) =', resultado3);

// Manipulación de cadenas
const frase = 'El desarrollo web es lo máximo';
console.log('Original:', frase);
console.log('indexOf "web":', frase.indexOf('web'));
console.log('lastIndexOf "o":', frase.lastIndexOf('o'));
console.log('includes "web":', frase.includes('web'));
console.log('replace web->Frontend:', frase.replace('web', 'Frontend'));
console.log('replaceAll "a"->"A":', frase.replaceAll('a', 'A'));
console.log('toUpperCase:', frase.toUpperCase());
console.log('toLowerCase:', frase.toLowerCase());
console.log('slice(3, 15):', frase.slice(3, 15));
console.log('substring(3, 15):', frase.substring(3, 15));
console.log('split por espacios:', frase.split(' '));
