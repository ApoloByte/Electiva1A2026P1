import { useState, useEffect } from 'react'
 
interface Animal {
    name: string;
    age: number;
    color: string;
    isPet: boolean;
    height: number
}
export const Animal = () => {

    const [animal, setAnimal] = useState<Animal[]>([
        { name: 'Max', age: 5, color: 'white', isPet: false, height: 45 },
        { name: 'Zaira', age: 3, color: 'black', isPet: true, height: 30 },
        { name: 'Leon', age: 8, color: 'golden', isPet: true, height: 120 },
        { name: 'Luna', age: 2, color: 'gray', isPet: true, height: 25 },
        { name: 'Ben', age: 4, color: 'brown', isPet: false, height: 50 }
    ]);

    const fetchAnimals = async () => {
        try {
            const response = await fetch('https://electiva5-api.apolobyte.top/animals');
            const data: Animal[] = await response.json();

            setAnimal((prevAnimals) => [...prevAnimals, ...data]);
        } catch (error) {
            console.error('Error al obtener los animales:', error);
        }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);


    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>SOLUCION RETO 1 REACT XD</h1>

            <section>
                <h3>2 mensaje de bienvenida</h3>
                <p>BIENVENIDO CHAVAL</p>
            </section>

            <section>
                <h3>5 Recorrer la lista de animales</h3>

                {animal.map((animal, index) => (
                    animal.isPet ? (
                        <div key={index} style={{ marginBottom: '15px' }}>
                            <h4>Animal {index + 1}</h4>
                            <p>Nombre: {animal.name}</p>
                            <p>Edad: {animal.age}</p>
                            <p>Color: {animal.color}</p>
                            <p>Es mascota: Sí</p>
                            <p>Estatura: {animal.height} cm</p>
                        </div>
                    ) : null
                ))}
            </section>
        </div>
    )
}
