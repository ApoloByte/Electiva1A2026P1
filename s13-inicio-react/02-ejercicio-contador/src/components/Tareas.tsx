import { useState } from 'react';

interface Tarea {
  id: number;
  texto: string;
  completed: boolean;
}

export const TodoLista = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const [tareas, setTareas] = useState<Tarea[]>([]);

  const addTask = () => {
    if (inputValue.trim().length === 0) return; 

    const nuevaTarea: Tarea = {
      id: new Date().getTime(), 
      texto: inputValue,
      completed: false
    };

    setTareas([...tareas, nuevaTarea]); 
  };

  const removeTask = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const resetList = () => {
    setTareas([]);
  };

  const toggleComplete = (id: number) => {
    setTareas(
      tareas.map(tarea => 
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };

  return (
    <>
      <h3>Lista de Tareas</h3>
      
      <input 
        type="text" 
        placeholder="Escribe una tarea..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <button onClick={addTask}>Añadir Tarea</button>
      <button onClick={resetList} style={{ marginLeft: '10px' }}>Resetear Lista</button>

      <ul>
       
        {[...tareas].sort((a, b) => Number(a.completed) - Number(b.completed)).map(tarea => (
          <li 
            key={tarea.id}
            onClick={() => toggleComplete(tarea.id)} 
            style={{ 
              cursor: 'pointer',
              margin: '5px 0',
              // con o sin linea tachada. Aquí la quite:
              textDecoration: 'none' 
            }}
          >
            {tarea.texto} 
            
            {tarea.completed && (
              <span style={{ color: '#2ecc71', fontWeight: 'bold', marginLeft: '10px' }}>
                (Completado)
              </span>
            )}

            <button 
              onClick={(e) => { 
                e.stopPropagation();
                removeTask(tarea.id); 
              }} 
              style={{ marginLeft: '10px', color: 'red' }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};