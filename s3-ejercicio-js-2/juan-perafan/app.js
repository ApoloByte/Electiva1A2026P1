let elemento = document.getElementById("mi-elemento");
console.log(elemento);

elemento.innerHTML = "Hola Mundo!";
elemento.style.color = "green";

//CLASSNAME
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);


for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "LOL xd ";
}

for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "green";
}

//ELEMENTOS P
let parrafos = document.getElementsByTagName('p');
console.log(parrafos); 

for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'Modificando parrafo modificado' + (i + 1);
}

for (let i = 0; i < parrafos.length; i++) {
	parrafos[i].style.color = "yellow";
	parrafos[i].style.fontWeight = "bold";
}

