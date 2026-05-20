import React from 'react'

export const Bienvenida = () => {
const name: string = "Lola";
const age: number = 12;
const isPet: boolean = true;
const names: string[] = ["Lola", "Luna", "Tobby"];
  
interface Animal {
    name: string;
    age: number;
    isPet: String;

  }  
  return (
    <>
    <h1> Bienvenido</h1>
    <ul>
        <li>Nombre:{name}</li>
        <li>Edad: {age}</li>
        <li>Es mascota:{isPet}</li>




    </ul>
    </>

  )
}
