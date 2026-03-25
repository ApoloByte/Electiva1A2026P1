//ACCESO A ELEMENTOS POR ID

let elemento = document.getElementById("mi-elemento"); // aqui estamos accecidendo al elemento 

console.log(elemento); 

elemento.innerHTML = "Hola, mundo!";  // aqui estamos cambiando el contenido del elemento

elemento.style.backgroundColor = "blue"; // aqui estamos cambiando el color de fondo del elemento

// ACCESO A ELEMENTOS POR CLASE 

elementos = document.getElementsByClassName("mi-clase");  // aqui estamos accediendo a los elementos con la clase "mi-clase" y almacenandolos en la variable elementos

console.log(elementos);

for (let i = 0; i < elementos.length; i++) { // aqui estamos iterando sobre los elementos con la clase "mi-clase" y cambiando su contenido y estilo

    elementos[i].innerHTML = "Hola, mundo!";

    elementos[i].style.color = "green";

}

// ACCESO A ELEMENTOS POR ETIQUETA 

let parrafos = document.getElementsByTagName("p"); // aqui estamos accediendo a los elementos con la etiqueta "p" y almacenandolos en la variable parrafos

console.log(parrafos);

for (let i = 0; i < parrafos.length; i++) { 

    parrafos[i].innerHTML = "Hola, mundo!"; // aqui estamos cambiando el contenido de los elementos con la etiqueta "p"

    parrafos[i].innerHTML = "Hola mundo";// aqui estamos cambiando el contenido de los elementos con la etiqueta "p" a "Hola mundo"

    parrafos[i].style.backgroundColor = "yellow"; 

    parrafos[i].style.border = "1px solid black";
}

