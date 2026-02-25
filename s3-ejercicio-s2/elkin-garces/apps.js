let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);

elementos.innerHTML= "hola mundo";
elementos.style.color = "red";

let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);


for (var i = 0; i < elementos.length; i++){
    elementos[i].innerHTML = "Nuevo contenido";
}
for (var i = 0; i < elementos.length; i++){
    elementos[i].style.color = "red";
    
}