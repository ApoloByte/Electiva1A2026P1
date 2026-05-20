// 1. Importamos el componente y la interfaz usando sus rutas
import Bienvenida from './components/Bienvenida';
import { type Animal } from './interfaces/Animal';

function App() {
  // 2. Aquí podemos usar la interfaz para crear un objeto de tipo Animal
  const miAnimal: Animal = {
    name: "Toro",
    age: 3,
    color: "Cafe",
    isPet: true,
    height: 0.5
  };

  return (
    <div>
      {/* 3. Aquí mostramos el componente de bienvenida */}
      <Bienvenida />

      {/* Solo para ver que los datos del animal funcionan */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Animal : {miAnimal.name} ({miAnimal.color})</p>
      </div>
    </div>
  );
}

export default App;