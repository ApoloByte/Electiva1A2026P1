import React from 'react';

// ==========================================
// 1. DEFINICIÓN DE LA INTERFAZ (CONTRATO)
// ==========================================
interface Person {
  name: string;
  age: number;
  email: string;
  address?: string; // El signo '?' hace que la propiedad sea opcional
}

export const BasicTypes = () => {
  // --- Variables Primitivas ---
  const name: string = "Víctor";
  const age: number = 28;
  const isActive: boolean = true;

  // --- Listas (Arrays) ---
  const names: string[] = ["Víctor", "María", "Pedro"];

  // --- Objetos Literales usando la Interfaz ---
  // Usamos 'let' en lugar de 'const' porque la guía pide reescribir esta variable más adelante con la API
  let user: Person = {
    name: "Hugo",
    age: 30,
    email: "hugo@email.com"
  };

  // ==========================================
  // 2. LOGICA Y FUNCIONES
  // ==========================================
  
  // Función Tradicional (Imprime en consola)
  function showUserData() {
    console.log(`Nombre: ${user.name}, Edad: ${user.age}, Correo: ${user.email}`);
  }

  // Función Asíncrona (Petición HTTP a la API)
  async function getUserFromAPI() {
    try {
      const respuesta = await fetch("https://electiva5-api.apolobyte.top/user");
      const data = await respuesta.json();
      
      user = data; // Reemplaza el objeto por los datos de María
      console.log("¡Datos actualizados en la variable 'user' desde la API!:", user);
    } catch (error) {
      console.error("Error al obtener data:", error);
    }
  }

  // ==========================================
  // 3. RENDERIZADO (DISEÑO EN LA WEB)
  // ==========================================
  return (
    <>
      {/* Sección Original */}
      <h3>Basic Types</h3>
      <ul>
        <li>Nombre: {name}</li>
        <li>Edad: {age}</li>
        <li>Activo: {isActive ? 'Sí' : 'No'}</li>
      </ul>

      <hr />

      {/* Sección de Listas (Arrays) */}
      <h4>Array of Names</h4>
      <p>Primer elemento de la lista: <strong>{names[0]}</strong></p>

      <h4>Elementos de la lista - Mapping</h4>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h4>Mostrar elementos de la lista utilizando join</h4>
      <p>{names.join(", ")}</p>

      <hr />

      {/* Sección de Objetos Literales */}
      <h4>Object literals</h4>
      <ul>
        <li>Nombre: {user.name}</li>
        <li>Edad: {user.age}</li>
        <li>Correo: {user.email}</li>
      </ul>

      <hr />

      {/* Sección de Botones y Funciones */}
      <h4>Imprimir los datos del usuario con un botón</h4>
      <button onClick={showUserData}>
        Mostrar datos de usuario en la consola
      </button>

      <h4>Imprimir los datos del usuario con un botón y una función flecha</h4>
      <button onClick={() => {
        console.log(`Flecha -> Nombre: ${user.name}, Edad: ${user.age}, Correo: ${user.email}`);
      }}>
        Mostrar en consola (Función Flecha)
      </button>

      <h4>Obtener datos utilizando una función asíncrona</h4>
      <button onClick={() => getUserFromAPI()}>
        Obtener datos de una API
      </button>
    </>
  );
};