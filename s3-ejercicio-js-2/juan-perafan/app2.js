let primerDiv = document.querySelector('#mi-elemento');
console.log(primerDiv); 

const elementos = document.querySelectorAll('.destacado');

const mensajes = document.querySelectorAll('.destacado');
mensajes.forEach((mensaje, indice) => {
	mensaje.textContent = `Nuevo mensaje ${indice + 1}`;
});

for (var i = 0; i < mensajes.length; i++) {
	elementos[i].style.color = "yellow";
}

//IMAGENES
const enlacesMenu = document.querySelectorAll("#menu a");

enlacesMenu.forEach(function(enlace) {
    enlace.classList.add("activo");
});

const imagenes = document.querySelectorAll("img[alt]");

imagenes.forEach(function(img) {
    img.style.border = "3px solid blue";
});

const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");

//ELEMENTOS li
tareasImpares.forEach(function(li) {
    li.style.fontWeight = "bold";
});

//CHECKBOX
const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxesMarcados.forEach(function(checkbox) {
        checkbox.checked = false;
    });

