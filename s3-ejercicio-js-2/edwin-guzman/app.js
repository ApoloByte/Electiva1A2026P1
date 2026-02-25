// 1. Manipulación por ID
let elemento = document.getElementById("mi-elemento");
elemento.innerHTML = "Nuevo contenido";
elemento.style.color = "blue";
console.log(elemento);

// 2. Manipulación por Clase
let elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Hola, mundo!";
    elementos[i].style.color = "green";
}

// 3. Manipulación por Etiqueta
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo " + (i + 1);
    parrafos[i].style.border = "1px solid yellow";
    parrafos[i].style.fontWeight = "bold";
}