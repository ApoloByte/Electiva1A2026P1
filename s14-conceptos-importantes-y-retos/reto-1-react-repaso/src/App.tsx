import { Mensaje } from './components/Mensaje';
import { AnimalsManager } from './components/Animals'; // <-- Importamos el nuevo componente

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Mensaje />
      <AnimalsManager /> {/* <-- Lo pintamos en pantalla */}
    </div>
  );
}

export default App;