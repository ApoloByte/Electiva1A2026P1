// EJERCICIO 1
let elemento = document.getElementById("mi-elemento");

elemento.innerHTML = "Hola, mundo!";
elemento.style.backgroundColor = "blue";
elemento.style.color = "white";


// EJERCICIO 2
let elementosClase = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementosClase.length; i++) {

    elementosClase[i].innerHTML = "Hola, mundo!";
    elementosClase[i].style.color = "green";

}


// EJERCICIO 3
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {

    parrafos[i].innerHTML = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid black";

}