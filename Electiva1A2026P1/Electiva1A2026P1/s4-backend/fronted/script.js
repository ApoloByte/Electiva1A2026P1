const API = "http://localhost:3000/user";

// Obtener usuarios

async function obtenerUsuarios() {
    const res = await fetch(API);
    const data = await res.json();

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    data.forEach(user => {
        let li = document.createElement("li");

        li.textContent = `${user.name} - ${user.age} - ${user.email}`;

        // Botón eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarUsuario(user.id);

        // Botón actualizar
        let btnActualizar = document.createElement("button");
        btnActualizar.textContent = "Actualizar";
        btnActualizar.onclick = () => actualizarUsuario(user.id);

        li.appendChild(btnEliminar);
        li.appendChild(btnActualizar);

        lista.appendChild(li);
    });
}

// Crear usuario

async function crearUsuario() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let email = document.getElementById("email").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, age, email })
    });

    obtenerUsuarios();
}

// Eliminar usuario

async function eliminarUsuario(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    obtenerUsuarios();
}

// Actualizar usuario

async function actualizarUsuario(id) {
    let name = prompt("Nuevo nombre:");
    let age = prompt("Nueva edad:");
    let email = prompt("Nuevo email:");

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            age: parseInt(age),
            email
        })
    });

    obtenerUsuarios();
}

// Cargar datos al inicio
obtenerUsuarios();