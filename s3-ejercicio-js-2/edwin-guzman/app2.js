// Resaltar destacados 
document.getElementById("ejercicio1").addEventListener("click", () => {
    const elementos = document.querySelectorAll(".destacado");
    elementos.forEach(elemento => {
        elemento.style.backgroundColor = "yellow";
    });
});

// Activar enlaces
document.getElementById("ejercicio2").addEventListener("click", () => {
    const enlaces = document.querySelectorAll("#menu a");
    enlaces.forEach(enlace => {
        enlace.classList.add("activo");
    });
});

// Bordear imágenes con atributo alt
document.getElementById("ejercicio3").addEventListener("click", () => {
    const imagenes = document.querySelectorAll("img[alt]");
    imagenes.forEach(imagen => {
        imagen.style.border = "3px solid blue";
    });
});

// Negrita en impares
document.getElementById("ejercicio4").addEventListener("click", () => {
    const impares = document.querySelectorAll(".tareas li:nth-child(odd)");
    impares.forEach(li => {
        li.style.fontWeight = "bold";
    });
});

// Desmarcar checkboxes
document.getElementById("ejercicio5").addEventListener("click", () => {
    desmarcarCheckboxes();
});

function desmarcarCheckboxes() { 
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    
    checkboxes.forEach(box => {
        box.checked = false;
    });
}

