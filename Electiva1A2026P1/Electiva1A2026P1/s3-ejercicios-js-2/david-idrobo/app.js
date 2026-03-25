// obtiene un elemento del html usando su id
let elemento = document.getElementById("mi-elemento");

// muestra en consola el elemento encontrado
console.log(elemento);

// cambia el contenido interno del elemento
elemento.innerHTML = "Hola Mundo!";

// cambia el color del texto del elemento a verde
elemento.style.color = "green";

// obtiene todos los elementos que tengan la clase "mi-clase"
let elementos = document.getElementsByClassName("mi-clase");

// muestra en consola la coleccion de elementos
console.log(elementos);

// recorre todos los elementos con la clase "mi-clase"
for (var i = 0; i < elementos.length; i++) {
    // cambia el contenido de cada elemento
    elementos[i].innerHTML = "<3";
}

// vuelve a recorrer los mismos elementos
for (var i = 0; i < elementos.length; i++) {
    // cambia el color del texto de cada elemento a verde
    elementos[i].style.color = "green";
}

// obtiene todos los elementos de tipo <p> (parrafos)
let parrafos = document.getElementsByTagName('p');

// muestra en consola todos los parrafos
console.log(parrafos); 

// recorre todos los parrafos
for (let i = 0; i < parrafos.length; i++) {
    // modifica el contenido de cada parrafo agregando su numero
    parrafos[i].innerHTML = 'Modificando parrafo ' + (i + 1);
}

// vuelve a recorrer los parrafos
for (let i = 0; i < parrafos.length; i++) {
    // cambia el color del texto a azul
    parrafos[i].style.color = "blue";
    
    // pone el texto en negrita
    parrafos[i].style.fontWeight = "bold";
}


// numero aleatorio entre 0 y 10
let num1 = Math.random() * 10;
console.log("random 0-10:", num1);

// numero entero entre 0 y 10
let num2 = Math.floor(Math.random() * 11);
console.log("entero 0-10:", num2);

// numero entre rango (5 a 15)
let min = 5;
let max = 15;
let num3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("rango 5-15:", num3);


// redondeos
let numero = 4.7;
console.log("round:", Math.round(numero));
console.log("ceil:", Math.ceil(numero));
console.log("floor:", Math.floor(numero));


// potencias
console.log("4^3:", Math.pow(4, 3));
console.log("5^2:", Math.pow(5, 2));
console.log("5^-2:", Math.pow(5, -2));


// raices
console.log("sqrt 9:", Math.sqrt(9));
console.log("sqrt 64:", Math.sqrt(64));
console.log("sqrt 25:", Math.sqrt(25));