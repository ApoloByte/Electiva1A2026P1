let elemento = document.getElementById("mi-elemento");

console.log(elemento); // Muestra el elemento en la consola 
elemento.innerHTML = "Hola, mundo!"; //Modifica el objeto
elemento.style.color = "blue";  //Modifica el color del texto

let elementos = document.getElementsByClassName("mi-clase");

for(var i = 0; i<elementos.length; i++)
{
    elementos[i].innerHTML = "Hola, mundo!" //Modifica el objeto
    elementos[i].style.color = "green" //Modifica el color del texto
}

let parrafos = document.getElementsByTagName("p");
for(var i = 0; i<elementos.length; i++)
{
    parrafos[i].innerHTML = "Parrado modificado" + (i+1); //Modifica el objeto

    parrafos[i].style.backgroundColor = "yellow";
	parrafos[i].style.fontWeight = 'bold';
}








