# Actividad de consulta en casa

- Para el siguiente ejercicio de consulta procure no utilizar IA generativa o si la utiliza redactar de nuevo con sus palabras de tal forma que logre comprender mejor los temas
- Busque ejemplos e implemente los conceptos aprendidos

En un documento Word con su nombre, defina lo siguiente

1. ¿Qué son los hooks en React?
2. useState
3. useEffect












# Guía de Ejercicios – Sesión práctica

**Tema:** Listas, Objetos Literales e Interfaces

## Ejercicio 1 – Contador

Utiliza un useState para implementar un contador que mediante 3 botones permita sumar, restar y resetear:

### Pasos para lograrlo:

1. Cree un proyecto Vite `npm create vite` con el nombre 02-ejercicio-contador
2. Cree un componente Contador, puede usar el siguiente comando; pero tenga en cuenta que debe de estar ubicad@ en la ruta de su proyecto; es decir, si usa el comando `ls` se va a ver entre otras cosas, un package.json
    
    ```jsx
    code src/components/Contador.tsx
    ```
    
3. Dentro del componente contador, utilice el snippet `rafc` para crear un componente de React
4. Cree el useState e incluyalo dentro del componente (Pregunte al profesor en dónde va el useState)
5. Cree una función para sumar 1, restar 1 y resetear el contador
6. Incluya el componente Contador dentro del App.tsx

### Ejercicio 2 – Lista de Tareas con Interfaz

Utiliza un useState para implementar una lista de tareas que adicionalmente permita añadir las tareas ingresadas mediante un Input

1. Crea una interfaz llamada Tarea
2. Crea un useState del tipo string[Tarea]
3. Crear las funciones `addTask`, `removeTask` y `resetList`.
4. Crea un botón que permita incluir elementos a esa lista utilizando la función set del useState que se creó en el paso 2
5. Renderiza la lista en un `<ul>`.
6. Al dar clic en una tarea, alterna su estado (completed).