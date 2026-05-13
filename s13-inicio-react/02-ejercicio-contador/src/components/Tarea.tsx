import React, { useState } from 'react';

// 1. Interfaz Tarea
interface Tarea {
  id: number;
  text: string;
  completed: boolean;
}

export const Tarea = () => {
  // 2. State de tipo array de Tarea
  const [tasks, setTasks] = useState<Tarea[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // 3. Funciones
  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask: Tarea = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue(''); // Limpiar input
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const resetList = () => {
    setTasks([]);
  };

  // 6. Alternar estado (completed)
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      
      {/* 4. Input y botón para añadir */}
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Añadir</button>
      <button onClick={resetList}>Borrar todo</button>

      {/* 5. Renderizado en ul */}
      <ul>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {task.text}
            <button onClick={(e) => { e.stopPropagation(); removeTask(task.id); }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};