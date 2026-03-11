// EJERCICIO 1
document.getElementById("ejercicio1").addEventListener("click", function(){

let destacados = document.querySelectorAll(".destacado");

destacados.forEach(function(el){
    el.style.backgroundColor = "yellow";
});

});



// EJERCICIO 2
document.getElementById("ejercicio2").addEventListener("click", function(){

let enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(link){
    link.classList.add("activo");
});

});



// EJERCICIO 3
document.getElementById("ejercicio3").addEventListener("click", function(){

let imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function(img){
    img.style.border = "3px solid blue";
});

});



// EJERCICIO 4
document.getElementById("ejercicio4").addEventListener("click", function(){

let tareas = document.querySelectorAll(".tareas li:nth-child(odd)");

tareas.forEach(function(t){
    t.classList.add("negrita");
});

});



// EJERCICIO 5
document.getElementById("ejercicio5").addEventListener("click", function(){

let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

checkboxes.forEach(function(c){
    c.checked = false;
});

let contador = 1;

document.getElementById("agregar").addEventListener("click", function(){

let contenedor = document.getElementById("lista-tareas");

let ul = contenedor.querySelector("ul");

if(!ul){

    ul = document.createElement("ul");
    contenedor.appendChild(ul);

}

let li = document.createElement("li");

li.textContent = "Tarea " + contador;

ul.appendChild(li);

contador++;

});

});