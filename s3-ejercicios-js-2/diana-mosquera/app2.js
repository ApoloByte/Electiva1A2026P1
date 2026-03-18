// este sirveresaltar los elementos con la clase destacado

document.getElementById("ejercicio1").addEventListener("click", function(){

    let destacados = document.querySelectorAll(".destacado");

    destacados.forEach(function(elemento){

        elemento.style.backgroundColor = "yellow";

 }
);

}
 );


// este sirve para seleccionar enlaces dentro demenu y agregar la clase activo

document.getElementById("ejercicio2").addEventListener("click", function(){

    let enlaces = document.querySelectorAll("#menu a");

    enlaces.forEach(function(link){

        link.classList.add("activo");

}
);

}
);


// este sirve para seleccionar imágenes con el atributo alt

document.getElementById("ejercicio3").addEventListener("click", function(){

    let imagenes = document.querySelectorAll("img[alt]");

    imagenes.forEach(function(img){

        img.style.border = "3px solid blue";
    
}
);

}
);



// este sirve para seleccionar elementos impares de la lista .tareas

document.getElementById("ejercicio4").addEventListener("click", function(){

    let tareas = document.querySelectorAll(".tareas li:nth-child(odd)");

    tareas.forEach(function(tarea){

        tarea.classList.add("negrita");
}
);

}
);



// este sirve paradesmarcar checkboxes seleccionados

document.getElementById("ejercicio5").addEventListener("click", function(){

    let checks = document.querySelectorAll("input[type='checkbox']:checked");

    checks.forEach(function(check){

        check.checked = false;

}
);

}
);
