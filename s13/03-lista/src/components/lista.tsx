import React, { useState } from 'react';

interface Tarea {
  id: number;
  text: string;
  completed: boolean;
}

const Lista: React.FC = () => {
  const [tasks, setTasks] = useState<Tarea[]>([]);
  const [input, setInput] = useState<string>('');

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    const newTask: Tarea = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
    setInput('');
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const resetList = () => setTasks([]);

  const toggleCompleted = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <section className="lista-tareas">
      <h2>Lista de tareas</h2>
      <div className="input-row">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={addTask}>
          Añadir
        </button>
        <button type="button" onClick={resetList}>
          Reset
        </button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleCompleted(t.id)}
            style={{
              cursor: 'pointer',
              textDecoration: t.completed ? 'line-through' : 'none',
            }}
          >
            {t.text}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTask(t.id);
              }}
              style={{ marginLeft: 8 }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Lista;