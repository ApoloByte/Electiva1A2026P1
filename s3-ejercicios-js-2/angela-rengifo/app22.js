const destacados = document.querySelectorAll(".destacado");

destacados.forEach(elemento => {
  elemento.style.backgroundColor = "yellow";
});

const enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(enlace) {
    enlace.classList.add("activo");
});

//g
const imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function(img) {
    img.style.border = "3px solid blue";
});

//h
const items = document.querySelectorAll(".tareas li:nth-child(odd)");

items.forEach(function(item) {
    item.style.fontWeight = "bold";
});

//i
function desmarcarCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

//j

let contador = 0;

function agregarTarea() {
    const contenedor = document.getElementById("lista-tareas");
    
    let lista = contenedor.querySelector("ul");
    
    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }
    
    contador++;
    
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Tarea " + contador;
    
    lista.appendChild(nuevoItem);
}
