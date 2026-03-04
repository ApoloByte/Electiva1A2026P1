let elementos= document.getElementsByClassName("mi-clase");
console.log(elementos);

let elementos2 = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "hola mundo";
}

var elementos3 = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos3.length; i++) {
	elementos3[i].style.color = "green"; 
}

let parrafos = document.getElementsByTagName('p');
console.log(parrafos); 

let parrafo = document.getElementsByTagName('p');
for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = ' hola mundo ' + (i + 1);
}

let parrafoss = document.getElementsByTagName('p');
for (let i = 0; i < parrafoss.length; i++) {
	parrafoss[i].style.backgroundColor = 'yellow';
	parrafoss[i].style.fontWeight = '1px';
}