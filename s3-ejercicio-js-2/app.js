document.addEventListener('DOMContentLoaded', () => {
    // mi-elemento 
    const el = document.getElementById('mi-elemento');
    if (el) {
        el.style.backgroundColor = 'blue';
        el.textContent = 'Hola, mundo!';
    }

    // Acceso por clase
    const claseEls = document.querySelectorAll('.mi-clase');
    claseEls.forEach(node => {
        node.textContent = 'Hola, mundo!';
        node.style.color = 'green';
    });

    // Acceso por etiqueta: todos los <p>
    const parrafos = document.getElementsByTagName('p');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].textContent = 'Hola mundo';
        parrafos[i].style.backgroundColor = 'yellow';
        parrafos[i].style.border = '1px solid';
    }

    // Selecciona todos los elementos con la clase 'destacado' y aplica fondo amarillo
    const destacados = document.querySelectorAll('.destacado');
    function resaltar() {
        destacados.forEach(el => { el.style.backgroundColor = 'yellow'; });
    }
    // Resaltar al cargar y al pulsar el botón
    resaltar();
    const btnResaltar = document.getElementById('resaltar');
    if (btnResaltar) btnResaltar.addEventListener('click', resaltar);

    // Seleccionar todos los enlaces dentro de #menu y añadir clase 'activo'
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(a => a.classList.add('activo'));

    // Seleccionar imágenes con atributo alt y cambiar borde a 3px sólido azul
    const imgsConAlt = document.querySelectorAll('img[alt]');
    imgsConAlt.forEach(img => img.style.border = '3px solid blue');

    // Seleccionar li impares dentro de .tareas y poner texto en negrita
    const tareasLi = document.querySelectorAll('.tareas li');
    for (let i = 0; i < tareasLi.length; i++) {
        if (i % 2 === 0) { // índice 0,2,4 -> posiciones 1,3,5 (impares visualmente)
            tareasLi[i].style.fontWeight = 'bold';
        }
    }

    // Función para desmarcar checkboxes marcados
    function desmarcarCheckboxes() {
        const checks = document.querySelectorAll('input[type="checkbox"]');
        checks.forEach(ch => { if (ch.checked) ch.checked = false; });
    }
    const btnDesmarcar = document.getElementById('ejercicio5');
    if (btnDesmarcar) btnDesmarcar.addEventListener('click', desmarcarCheckboxes);

    const container = document.getElementById('lista-tareas');
    const btnAdd = document.getElementById('add-task');
    if (container && btnAdd) {
        let contador = 0;
        function crearListaSiNoExiste() {
            let ul = container.querySelector('ul');
            if (!ul) {
                ul = document.createElement('ul');
                container.appendChild(ul);
            }
            return ul;
        }
        btnAdd.addEventListener('click', () => {
            contador += 1;
            const ul = crearListaSiNoExiste();
            const li = document.createElement('li');
            li.textContent = `Tarea ${contador}`;
            ul.appendChild(li);
        });
    }

    // Mostrar saludo según la URL: /hello/:name
    (function showHelloFromPath() {
        try {
            const path = window.location.pathname || window.location.href;
            const match = path.match(/\/hello\/(.+)$/);
            if (match) {
                const name = decodeURIComponent(match[1]);
                const helloEl = document.getElementById('hello-msg');
                if (helloEl) helloEl.textContent = `¡Hola, ${name}!`;
            }
        } catch (e) { /* noop */ }
    })();

    // Fetch al backend: /user
    function setDataUserElement(user) {
        let dataUser = document.getElementById('data-user');
        if (dataUser) {
            dataUser.textContent = JSON.stringify(user, null, 2);
        }
    }

    async function fetchUser() {
        try {
            const respuesta = await fetch('http://localhost:3000/user');
            if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
            const data = await respuesta.json();
            setDataUserElement(data);
            console.log('data', data);
        } catch (error) {
            console.error('Error al obtener data:', error);
            setDataUserElement({ error: String(error) });
        }
    }
    fetchUser();

    const fetchBtn = document.getElementById('fetch-user');
    if (fetchBtn) fetchBtn.addEventListener('click', fetchUser);
});

// Función declarativa
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log('Función declarativa:', saludar('Juan'));

// Número aleatorio entre 0 y 10 (float)
const rndFloat0to10 = Math.random() * 10;
console.log('Número aleatorio (0-10):', rndFloat0to10);

// Número entero aleatorio entre 0 y 10 (inclusive)
const rndInt0to10 = Math.floor(Math.random() * 11);
console.log('Entero aleatorio (0-10):', rndInt0to10);

// Número entero aleatorio entre dos valores
function randomIntBetween(min, max) {
    const lo = Math.ceil(min);
    const hi = Math.floor(max);
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}
console.log('Entero aleatorio entre 5 y 15:', randomIntBetween(5, 15));

// Funciones de redondeo
const val = 4.7;
console.log('Math.round(4.7)=', Math.round(val));
console.log('Math.ceil(4.7)=', Math.ceil(val));
console.log('Math.floor(4.7)=', Math.floor(val));

// Potencias
console.log('4^3 =', Math.pow(4, 3));
console.log('5^2 =', Math.pow(5, 2));
console.log('5^-2 =', Math.pow(5, -2));

// Raíces cuadradas
console.log('sqrt(9)=', Math.sqrt(9));
console.log('sqrt(64)=', Math.sqrt(64));
console.log('sqrt(25)=', Math.sqrt(25));

