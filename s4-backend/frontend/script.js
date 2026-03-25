function setDataUserElement(user) {  //
    let dataUser = document.getElementById("data-user"); // Obtenemos el elemento del DOM con el id "data-user" para mostrar la información del usuario

    if (dataUser) {
        dataUser.textContent = JSON.stringify(user, null, 2); // si el elemento existe , actualizamos su contenido con la informacion del usuario formato json
    }
}

async function fetchUser() { // Definimos una función asíncrona para obtener la información del usuario desde el servidor
    try {
        const respuesta = await fetch("http://localhost:3000/user"); //
        const data = await respuesta.json(); //

        setDataUserElement(data); // Llamamos a la función setDataUserElement para mostrar la información del usuario en el elemento del DOM

    } catch (error) { 
        console.error("Error:", error);
    }
}

fetchUser(); // Llamamos a la función fetchUser para obtener y mostrar la información del usuario cuando se carga la página
