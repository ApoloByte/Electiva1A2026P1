import { useState } from "react";

type Tarea = {
  texto: string;
  completed: boolean;
};

function ListaTareas() {

  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);

  // Agregar tarea
  const addTask = () => {

    if (tarea.trim() === "") return;

    const nuevaTarea: Tarea = {
      texto: tarea,
      completed: false
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  // Eliminar tarea
  const removeTask = (index: number) => {

    const nuevasTareas = tareas.filter((_, i) => i !== index);

    setTareas(nuevasTareas);
  };

  // Resetear lista
  const resetList = () => {
    setTareas([]);
  };

  // Completar tarea
  const toggleTask = (index: number) => {

    const nuevasTareas = [...tareas];

    nuevasTareas[index].completed =
      !nuevasTareas[index].completed;

    setTareas(nuevasTareas);
  };

  return (
    <div>

      <h1>Lista de Tareas</h1>

      <input
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />

      <button onClick={addTask}>
        Agregar
      </button>

      <button onClick={resetList}>
        Resetear
      </button>

      <ul>
        {tareas.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              cursor: "pointer",
              textDecoration: item.completed
                ? "line-through"
                : "none"
            }}
          >
            {item.texto}

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTask(index);
              }}
            >
              Eliminar
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListaTareas;