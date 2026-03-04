
var elementos = document.getElementsByClassName("destacado");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.backgroundColor = "yellow"; // Cambia el color del texto a rojo
}

const enlacesMenu = document.querySelectorAll("#menu a");

enlacesMenu.forEach(function(enlace) {
    enlace.classList.add("activo");
});

const imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function(img) {
    img.style.border = "3px solid blue";
});

const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");

tareasImpares.forEach(function(li) {
    li.style.fontWeight = "bold";
});


    const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxesMarcados.forEach(function(checkbox) {
        checkbox.checked = false;
    });


elemento.classList.add('Activo');


let contador = 0;

const boton = document.querySelector("#agregarTarea");
const contenedor = document.querySelector("#lista-tareas");

boton.addEventListener("click", function() {
    
    contador++;

    // Verificar si ya existe un <ul>
    let lista = contenedor.querySelector("ul");

    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }

    // Crear nuevo <li>
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = "Tarea " + contador;

    // Agregar <li> al <ul>
    lista.appendChild(nuevaTarea);
});