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

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
for (let i = 0; i<parrafos.length; i++)
{
    parrafos[i].innerHTML='Parrafo modificado' + (i + 1)
}
for(let i =0; i <  parrafos.length ; i++)
{
    parrafos[i].style.color = "Blue";
    parrafos[i].style.fontWeight = "Bold";
}




