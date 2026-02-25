let elemento = document.getElementById("mi-elemento");
console.log(elemento);

elemento.innerHTML = "Hola Mundo!";
elemento.style.color = "red";

//CLASSNAME
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);

for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "LOL XD ";
}

for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "red"; 
}