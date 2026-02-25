let elemento = document.getElementById("mi elemento");
console.log(elemento);

elemento.innerHTML = "Hola";
elemento.style.color = "red";

//Clases
let elementos = document.getElementsByClassName("mi clase");
console.log(elementos);

for (var i =0; i < elementos.length; i++) { 
    elementos[i].innerHTML = "Amazing";
}
for (var i =0; i
     < elementos.length; i++) { 
    elementos[i].style.color = "green";
}
