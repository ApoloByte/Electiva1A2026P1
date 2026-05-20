import React from 'react'
import { useState } from 'react';

interface Animal{
    name: String;
    age: number;
    color: String;
    isPet: boolean;
    height: number;
}
export const Animal = () => {

const [animal, setAnimal] = useState<Animal[]>([]);
const [texto, setTexto] = useState('');

const addAdmin = () =>{
    if  (texto.trim()== '') return;
    const nuevoAnimal: Animal = {
    name: texto,
    age: 0,
    color: 'Desconocido',
    isPet: false,
    height: 0
    }
}

  return (
    <div>
        <h1>hola xd</h1>

    </div>
  )
}
