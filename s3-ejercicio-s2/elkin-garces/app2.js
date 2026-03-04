var elementos = document.getElementsByClassName("destacado");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.backgroundColor = 'yellow';
}
console.log(elementos);

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