//ACCESO A ELEMENTOS POR ID

let elemento = document.getElementById("mi-elemento"); // aqui estamos accecidendo al elemento 

console.log(elemento);

elemento.innerHTML = "Hola, mundo!";

elemento.style.backgroundColor = "blue";

// ACCESO A ELEMENTOS POR CLASE 

elementos = document.getElementsByClassName("mi-clase");

console.log(elementos);

for (let i = 0; i < elementos.length; i++) {

    elementos[i].innerHTML = "Hola, mundo!";

    elementos[i].style.color = "green";

}

// ACCESO A ELEMENTOS POR ETIQUETA 

let parrafos = document.getElementsByTagName("p");

console.log(parrafos);

for (let i = 0; i < parrafos.length; i++) {

    parrafos[i].innerHTML = "Hola, mundo!";

    parrafos[i].innerHTML = "Hola mundo";

    parrafos[i].style.backgroundColor = "yellow";

    parrafos[i].style.border = "1px solid black";
}

