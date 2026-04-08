// Selección por ID
let elemento = document.getElementById("mi-elemento");
console.log(elemento);

elemento.innerHTML = "Nuevo Contenido";
elemento.style.color = "red";
elemento.style.background = "blue";

// Selección por clase
var elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);

for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "green"; // Cambia el color del texto a verde
}

let parrafos = document.getElementsByTagName('p');
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo";

    parrafos[i].style.background = 'yellow';
	parrafos[i].style.border = "1px solid black";

}
