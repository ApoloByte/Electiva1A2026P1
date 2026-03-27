// 4 Seleccionar elementos con clase destacado
const destacados = document.querySelectorAll(".destacado");

destacados.forEach(function (elemento) {
    elemento.style.backgroundColor = "yellow";
});


// 6 Seleccionar enlaces dentro del menu
const enlacesMenu = document.querySelectorAll("#menu a");

enlacesMenu.forEach(function (enlace) {
    enlace.classList.add("activo");
});


// 7 Seleccionar imágenes con atributo alt
const imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function (img) {
    img.style.border = "3px solid blue";
});


// 8 Seleccionar li impares dentro de tareas
const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");

tareasImpares.forEach(function (tarea) {
    tarea.style.fontWeight = "bold";
});


// 9 Función para desmarcar checkboxes
function desmarcarCheckbox() {

    const checks = document.querySelectorAll('input[type="checkbox"]:checked');

    checks.forEach(function (check) {
        check.checked = false;
    });

}


// 10 Crear lista de tareas dinámica
let contador = 1;

const boton = document.querySelector("#agregar");
const contenedor = document.querySelector("#lista-tareas");

boton.addEventListener("click", function () {

    let lista = contenedor.querySelector("ul");

    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = "Tarea " + contador;

    lista.appendChild(nuevaTarea);

    contador++;
})

