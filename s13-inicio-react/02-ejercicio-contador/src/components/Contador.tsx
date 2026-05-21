import React, { useState } from 'react';

interface Tarea {
  id: number;
  text: string;
  completed: boolean;
}

export const Contador = () => {
  // --- Lógica del Contador ---
  const [cuenta, setCuenta] = useState<number>(0);
  const incrementar = () => setCuenta(cuenta + 1);
  const decrementar = () => setCuenta(cuenta - 1);

  // --- Lógica de la Lista de Tareas ---
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = () => {
    if (inputValue.trim() === '') return;
    const nuevaTarea: Tarea = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setTareas([...tareas, nuevaTarea]);
    setInputValue('');
  };

  const removeTask = (id: number) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const resetList = () => {
    setTareas([]);
  };

  const toggleTask = (id: number) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Cambiado de h1 a h2 para igualar al Ejercicio 2 */}
      <h2>Ejercicio 1</h2>
      <div>
        <h3>Contador: {cuenta}</h3>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={incrementar} style={{ marginLeft: '10px' }}>Incrementar</button>
        <button onClick={() => setCuenta(0)} style={{ marginLeft: '10px' }}>Reiniciar</button>
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h2>Ejercicio 2</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={addTask} style={{ marginLeft: '10px' }}>Añadir Tarea</button>
      <button onClick={resetList} style={{ marginLeft: '10px' }}>Reiniciar Lista</button>

      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li 
            key={tarea.id}
            style={{ 
              textDecoration: tarea.completed ? 'line-through' : 'none',
              marginBottom: '8px'
            }}
          >
            <span 
              onClick={() => toggleTask(tarea.id)} 
              style={{ cursor: 'pointer' }}
            >
              {tarea.text}
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