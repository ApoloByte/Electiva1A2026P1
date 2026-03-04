// acceso por id
let elemento = document.getElementById("mi-elemento");

if (elemento) {
    elemento.innerHTML = "Hola, mundo!";
    elemento.style.backgroundColor = "Purple";
    elemento.style.color = "white";
}

// acceso por clase
let elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerHTML = "Hola, mundo!";
    elementos[i].style.color = "#470130";
}

// acceso por etiqueta
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo";
    parrafos[i].style.backgroundColor = "#ebc7e3";
    parrafos[i].style.border = "1px solid black";
}

// queryselector destacados
document.getElementById("ejercicio1")?.addEventListener("click", () => {
    let destacados = document.querySelectorAll(".destacado");
    destacados.forEach(el => el.style.backgroundColor = "#af6de6");
});

// queryselector enlaces menu
document.getElementById("ejercicio2")?.addEventListener("click", () => {
    let enlaces = document.querySelectorAll("#menu a");
    enlaces.forEach(el => el.classList.add("activo"));
});

// queryselector imagenes alt
document.getElementById("ejercicio3")?.addEventListener("click", () => {
    let imagenes = document.querySelectorAll("img[alt]");
    imagenes.forEach(img => img.style.border = "3px solid white");
});

// queryselector lista impares
document.getElementById("ejercicio4")?.addEventListener("click", () => {
    let items = document.querySelectorAll(".tareas li:nth-child(odd)");
    items.forEach(li => li.style.fontWeight = "bold");
});

// desmarcar checkbox
document.getElementById("ejercicio5")?.addEventListener("click", () => {
    let checks = document.querySelectorAll('input[type="checkbox"]:checked');
    checks.forEach(ch => ch.checked = false);
});

// appendchild lista dinamica
let contador = 0;

function agregarTarea() {
    contador++;

    let contenedor = document.getElementById("lista-tareas");
    if (!contenedor) return;

    let ul = contenedor.querySelector("ul");

    if (!ul) {
        ul = document.createElement("ul");
        contenedor.appendChild(ul);
    }

    let li = document.createElement("li");
    li.textContent = "Tarea " + contador;

    ul.appendChild(li);
}

// math random 0 a 1
console.log(Math.random());

// math entero 0 a 10
console.log(Math.floor(Math.random() * 11));

// math entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorio(5, 15));

// math redondeo
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

// math potencias
console.log(Math.pow(4, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(5, -2));

// math raiz
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.sqrt(25));

// funcion declarativa
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
console.log(saludar("Juan"));

// funcion expresion
const sumar = function(a, b) {
    return a + b;
};
console.log(sumar(3, 4));

// funcion flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 5));

// ciclo for
for (let i = 1; i <= 5; i++) {
    console.log("Iteracion " + i);
}

// arreglos
let frutas = ["banano","mamoncillo", "mangostino","manzana", "pera", "uva", "mango"];

frutas.forEach(fruta => console.log(fruta));

frutas.push("fresa");
console.log(frutas);

console.log(frutas.length);