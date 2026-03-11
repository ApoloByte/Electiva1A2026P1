// 1. Manipulación por ID
let elemento = document.getElementById("mi-elemento");
elemento.innerHTML = "Hola, mundo!";
elemento.style.backgroundColor = "blue";

// 2. Manipulación por Clase
let elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Hola, mundo!";
    elementos[i].style.color = "green";
}

// 3. Manipulación por Etiqueta
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo ";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid yellow";
}


//
let contador = 1; // contador de tareas

document.getElementById("agregar-tarea").addEventListener("click", function() {

    const contenedor = document.getElementById("lista-tareas");

    // Si no existe un <ul>, crearlo
    let lista = contenedor.querySelector("ul");
    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }

    // Crear un nuevo <li>
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = "Tarea " + contador;

    lista.appendChild(nuevaTarea);

    contador++;
});