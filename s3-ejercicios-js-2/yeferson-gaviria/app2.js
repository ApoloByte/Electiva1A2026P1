let destacados = document.getElementsByClassName("destacado");

for (var i = 0; i<destacados.length; i++ ){
    destacados[i].style.backgroundColor = "yellow";
}

let enlaces = document.querySelectorAll("#menu a");
enlaces.forEach(enlace => {enlace.classList.add("activo");});

let imagenes = document.querySelectorAll("img[alt]");
imagenes.forEach(img => {
  img.style.border = "3px solid blue";
});

const items = document.querySelectorAll(".tareas li:nth-child(odd)");
items.forEach(item => {
  item.style.fontWeight = "bold";
});



//presionar el boton "Desmarcar seleccionados" para que funcione"
function desmarcarCheckboxes() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    cb.checked = false;
  });
}

