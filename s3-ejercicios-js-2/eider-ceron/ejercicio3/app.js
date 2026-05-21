let parrafos = document.getElementsByTagName('p');
console.log(parrafos); 
for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "hola mundo";
}
