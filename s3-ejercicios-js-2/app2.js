// Ejercicio 1
document.getElementById("ejercicio1").addEventListener("click", () => {
    const destacados = document.querySelectorAll(".destacado");
    destacados.forEach(el => {
        el.style.backgroundColor = "yellow";
    });
});

// Ejercicio 2
document.getElementById("ejercicio2").addEventListener("click", () => {
    const enlaces = document.querySelectorAll("#menu a");
    enlaces.forEach(el => {
        el.classList.add("activo");
    });
});

// Ejercicio 3
document.getElementById("ejercicio3").addEventListener("click", () => {
    const imagenes = document.querySelectorAll("img[alt]");
    imagenes.forEach(img => {
        img.style.border = "3px solid blue";
    });
});

// Ejercicio 4
document.getElementById("ejercicio4").addEventListener("click", () => {
    const items = document.querySelectorAll(".tareas li:nth-child(odd)");
    items.forEach(li => {
        li.style.fontWeight = "bold";
    });
});

// Ejercicio 5
document.getElementById("ejercicio5").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach(cb => {
        cb.checked = false;
    });
});