import React from 'react'

export const BasicTypes = () => {
    const name: string = "Víctor";
    const age: number = 28;
    const isActive: boolean = true;
    const names: string[] = ["Víctor", "María", "Pedro"];
    interface Person {
        name: string;
        age: number;
        email: string;
    }
    let user: Person = {
        name: "Hugo",
        age: 30,
        email: "hugo@email.com"
    };
    function showUserData() {
        console.log(
            `Nombre: ${user.name}, Edad: ${user.age}, Correo: ${user.email}`
        );
    }

    async function getUserFromAPI() {
        try {
            const respuesta = await fetch(
                "https://electiva5-api.apolobyte.top/user"
            );
            const data = await respuesta.json();
            user = data; // Actualiza el objeto user con los datos obtenidos

        } catch (error) {
            console.error("Error al obtener data:", error);
        }
    }


    return (
        <>
            <h3>Basic Types</h3>
            <ul>
                <li>Nombre: {name}</li>
                <li>Edad: {age}</li>
                <h4>Array of Names</h4>
                Primer elemento de la lista: {names[0]}
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <h4>Mostrar elementos de la lista utilizando join</h4>
                {names.join(", ")}
            </ul>
            <h4>Object literals</h4>
            <ul>
                <li>Nombre: {user["name"]}</li>
                <li>Edad: {user.age}</li>
                <li>Correo: {user.email}</li>
            </ul>
            <h4>Imprimir los datos del usuario con un botón</h4>
            <button onClick={showUserData}>Mostrar datos de usuario en la consola del navegador</button>
            <h4>Imprimir los datos del usuario con un botón y una función flecha</h4>
            <button onClick={
                () => { console.log(`Nombre: ${user.name}, Edad: ${user.age}, Correo: ${user.email}`) }
            }>
                Mostrar datos de usuario en la consola del navegador
            </button>
            <h4>Obtener datos utilizando una función asíncrona</h4>
            <button onClick={() => getUserFromAPI()}>
                Obtener datos de una API
            </button>
            <ul>
                <li>Nombre: {user["name"]}</li>
                <li>Edad: {user.age}</li>
                <li>Correo: {user.email}</li>
            </ul>



        </>

    )
}
