// PUNTO 1
document.getElementById("ejercicio1").onclick = function(){

let elementos = document.querySelectorAll(".destacado");

elementos.forEach(function(el){
    el.style.background = "yellow";
});

}


// PUNTO 2
document.getElementById("ejercicio2").onclick = function(){

let enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(link){
    link.classList.add("activo");
});

}


// PUNTO 3
document.getElementById("ejercicio3").onclick = function(){

let imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function(img){
    img.style.border = "3px solid blue";
});

}


// PUNTO 4
document.getElementById("ejercicio4").onclick = function(){

let tareas = document.querySelectorAll(".tareas li:nth-child(odd)");

tareas.forEach(function(li){
    li.classList.add("negrita");
});

}


// PUNTO 5
document.getElementById("ejercicio5").onclick = function(){

let checks = document.querySelectorAll('input[type="checkbox"]:checked');

checks.forEach(function(check){
    check.checked = false;
});

}