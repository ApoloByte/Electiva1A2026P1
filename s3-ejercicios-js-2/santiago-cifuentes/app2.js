//destacados
let destacados = document.querySelectorAll(".destacado");

destacados.forEach(function(elemento) {
    elemento.style.backgroundColor = "yellow";
});

//enlace menu
let enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(enlace) {
    enlace.classList.add("activo");
});

//imagen alt 
let imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function(img) {
    img.style.border = "3px solid blue";
});

//impar lista 
let items = document.querySelectorAll(".tareas li:nth-child(odd)");

items.forEach(function(item) {
    item.classList.add("negrita");
});

//desmarcar 
function desmarcarCheckboxes() {
    let checks = document.querySelectorAll("input[type='checkbox']:checked");

    checks.forEach(function(check) {
        check.checked = false;
    });
}

//lista dinamica 
let contador = 1;

function agregarTarea() {

    let contenedor = document.getElementById("lista-tareas");

    // Verificar si existe ul
    let lista = contenedor.querySelector("ul");

    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }

    // Crear nuevo elemento
    let item = document.createElement("li");
    item.textContent = "Tarea " + contador;

    lista.appendChild(item);

    contador++;
}