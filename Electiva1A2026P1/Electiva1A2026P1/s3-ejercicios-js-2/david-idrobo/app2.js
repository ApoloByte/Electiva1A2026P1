// obtiene todos los elementos que tengan la clase "destacado"
var elementos = document.getElementsByClassName("destacado");

// recorre todos esos elementos
for (var i = 0; i < elementos.length; i++) {
	// cambia el color de fondo a amarillo
	elementos[i].style.backgroundColor = 'yellow';
}

// muestra en consola la coleccion de elementos
console.log(elementos);


// selecciona todos los enlaces <a> que esten dentro del elemento con id "menu"
const enlacesMenu = document.querySelectorAll("#menu a");

// recorre cada enlace encontrado
enlacesMenu.forEach(function(enlace) {
    // agrega la clase "activo" a cada enlace
    enlace.classList.add("activo");
});


// selecciona todas las imagenes que tengan atributo alt
const imagenes = document.querySelectorAll("img[alt]");

// recorre cada imagen
imagenes.forEach(function(img) {
    // agrega un borde azul a cada imagen
    img.style.border = "3px solid blue";
});


// selecciona los elementos <li> impares dentro de la clase "tareas"
const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");

// recorre esos elementos
tareasImpares.forEach(function(li) {
    // pone el texto en negrita
    li.style.fontWeight = "bold";
});


// selecciona todos los checkboxes que estan marcados
const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
    
// recorre cada checkbox seleccionado
checkboxesMarcados.forEach(function(checkbox) {
    // desmarca (pone en false) cada checkbox
    checkbox.checked = false;
});