import React, { use } from 'react'
import { useState } from 'react'

interface Animal {
    name: String;
    age: number;
    color: String;
    isPet: boolean;
    height: number
}
export const Animal = () => {

    const [animal, setAnimal] = useState<Animal[]>([]);
    const [texto, setTexto] = useState('');
 
    const addAnimal = () => {
        if (texto.trim() === '') return;

        const nuevoAnimal:  Animal = {
            name: texto,
            age: 0,
            color: 'Desconocido',
            isPet: false,
            height: 0
        };

        setAnimal([...animal, nuevoAnimal]);
        setTexto('');
    }
    return (
        <div>
            <h1>HOLI XD</h1>

        </div>
    )
}
