import { useState } from 'react';

interface Tarea {
    id: number;
    nombre: string;
    completada: boolean;
}

const ListaTareas = () => {
    const [tareas, setTareas] = useState<Tarea[]>([]);

    const [textoInput, setTextoInput] = useState('');


    const addTask = () => {
        if (textoInput.trim() === '') return; 

        const nuevaTarea: Tarea = {
            id: Date.now(), 
            nombre: textoInput,
            completada: false
        };

        setTareas([...tareas, nuevaTarea]);
        setTextoInput(''); 
    };

    const removeTask = (id: number) => {
        const nuevasTareas = tareas.filter(t => t.id !== id);
        setTareas(nuevasTareas);
    };

    const toggleTask = (id: number) => {
        const tareasModificadas = tareas.map(t => {
            if (t.id === id) {
                return { ...t, completada: !t.completada };
            }
            return t;
        });
        setTareas(tareasModificadas);
    };

    const resetList = () => {
        setTareas([]);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Lista de Tareas</h2>

            <input
                type="text"
                value={textoInput}
                onChange={(e) => setTextoInput(e.target.value)}
                placeholder="Escribe una tarea..."
            />
            <button onClick={addTask}>Agregar Tarea</button>
            <button onClick={resetList} style={{ marginLeft: '10px' }}>Resetear Lista</button>

            <ul>
                {tareas.map((tarea) => (
                    <li
                        key={tarea.id}
                        style={{
                            textDecoration: tarea.completada ? 'line-through' : 'none',
                            cursor: 'pointer',
                            marginBottom: '5px'
                        }}
                    >
                        <span onClick={() => toggleTask(tarea.id)}>
                            {tarea.nombre}
                        </span>
                        <button
                            onClick={() => removeTask(tarea.id)}
                            style={{ marginLeft: '10px', fontSize: '10px' }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;
