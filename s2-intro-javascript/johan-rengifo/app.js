// Acceso por ID al DOM
let elemento = document.getElementById("mi-elemento");
elemento.innerHTML = "Hola mundo!";
console.log(elemento);

// Cambiar color
let elemento = document.getElementById("mi-elemento");
elemento.style.color = "blue";

// Multiples elementos por clase
let elementos = document.getElementsByClassName("mi-clase");
// Tamaño en texto
for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.fontSize = "20px";
}

// color
for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "green";
}

// Acceso a elemento por etiqueta
let parrafos = document.getElementsByTagName("p");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid";
}

// todos los elementos con la clase destacado y cámbiales el color de fondo a amarillo
let destacados = document.querySelectorAll(".destacado");
for (let i = 0; i < destacados.length; i++) {
    destacados[i].style.backgroundColor = "yellow";
}

// todos los enlaces (<a>) dentro de un elemento con id "menu" y agrega la clase "activo"
let enlaces = document.querySelectorAll("#menu a");
enlaces.forEach(enlace => {
    enlace.classList.add("activo");
});

// todos las imágenes (<img>) que tengan el atributo alt y cambia su borde a 3px sólido azul
let imagenes = document.querySelectorAll("img[alt]");
imagenes.forEach(imagen => {
    imagen.style.border = "3px solid blue";
});

// todo los elementos de lista (<ul>) impares de una lista con clase "tareas" y ponles el texto en negrita
let tareas = document.querySelectorAll(".tareas ul:nth-child(odd)");
tareas.forEach(tarea => {
    tarea.style.fontWeight = "bold";
});

