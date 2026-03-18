
document.getElementById("ejercicio1").addEventListener("click", function() {
  let destacados = document.querySelectorAll(".destacado");
  
  destacados.forEach(function(elemento) {
      elemento.style.backgroundColor = "yellow";
  });
});

document.getElementById("ejercicio2").addEventListener("click", function() {
    let enlaces = document.querySelectorAll("#menu a");
    
    enlaces.forEach(function(elemento) {
        elemento.classList.add("activo");
    });
});

document.getElementById("ejercicio3").addEventListener("click", function() {
    let imagenes = document.querySelectorAll("img[alt]");
    
    imagenes.forEach(function(elemento) {
        elemento.style.border = "3px solid black";
    });
});

document.getElementById("ejercicio4").addEventListener("click", function() {
    let items = document.querySelectorAll(".tareas li:nth-child(odd)");
    
    items.forEach(function(elemento) {
        elemento.style.fontWeight = "bold";
    });
});
document.getElementById("ejercicio5").addEventListener("click", function() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach(function(elemento) {
        elemento.checked = false;
    });
document.getElementById("ejercicio6").addEventListener("click", function() {
  let contador =0;
  contador++;
  let nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = "Tarea " + contador;

  let contenedorTareas = document.getElementById("lista-tareas");
  let lista = contenedorTareas.querySelector("ul");

  if (!lista) {
      lista = document.createElement("ul");
      contenedorTareas.appendChild(lista);

  }
  lista.appendChild(nuevaTarea);
  
});
});
