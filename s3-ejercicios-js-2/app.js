// 1. Por ID
const elemento = document.getElementById("mi-elemento");
elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";

// 2. Por clase
const elementosClase = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementosClase.length; i++) {
    elementosClase[i].textContent = "Hola, mundo!";
    elementosClase[i].style.color = "green";
}

// 3. Por etiqueta
const parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid black";
}