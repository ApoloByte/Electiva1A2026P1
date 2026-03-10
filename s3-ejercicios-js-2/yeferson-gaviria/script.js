let contador = 1;

const boton = document.getElementById("agregar");
const contenedor = document.getElementById("lista-tareas");

boton.addEventListener("click", function () {

  let lista = contenedor.querySelector("ul");

  if (!lista) {
    lista = document.createElement("ul");
    contenedor.appendChild(lista);
  }

  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = "Tarea " + contador;

  lista.appendChild(nuevaTarea);

  contador++;
});




//Ejercicios objeto math



console.log(Math.floor(Math.random() * 11));

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(5, 20));

let numero = 4.7;

console.log("round:", Math.round(numero));
console.log("ceil:", Math.ceil(numero));
console.log("floor:", Math.floor(numero));

console.log("4^3 =", Math.pow(4, 3));
console.log("5^2 =", Math.pow(5, 2));
console.log("5^-2 =", Math.pow(5, -2));

console.log("√9 =", Math.sqrt(9));
console.log("√64 =", Math.sqrt(64));
console.log("√25 =", Math.sqrt(25));