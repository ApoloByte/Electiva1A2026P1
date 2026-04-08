// EJERCICIO 1
document.getElementById("ejercicio1").addEventListener("click", () => {
    document.querySelectorAll(".destacado").forEach(el => {
        el.style.backgroundColor = "yellow";
    });
});

// EJERCICIO 2
document.getElementById("ejercicio2").addEventListener("click", () => {
    document.querySelectorAll("#menu a").forEach(el => {
        el.classList.add("activo");
    });
});

// EJERCICIO 3
document.getElementById("ejercicio3").addEventListener("click", () => {
    document.querySelectorAll("img[alt]").forEach(img => {
        img.style.border = "3px solid blue";
    });
});

// EJERCICIO 4
document.getElementById("ejercicio4").addEventListener("click", () => {
    document.querySelectorAll(".tareas li:nth-child(odd)").forEach(li => {
        li.classList.add("negrita");
    });
});

// EJERCICIO 5
document.getElementById("ejercicio5").addEventListener("click", () => {
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        cb.checked = false;
    });
});