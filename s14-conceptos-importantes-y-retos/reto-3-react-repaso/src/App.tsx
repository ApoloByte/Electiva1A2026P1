// src/App.tsx
import { Title } from './components/Title';
import { ProductList } from './components/ProductList'; // <-- Importamos tu componente

function App() {
  return (
    <div>
      <Title />
      {/* Añadimos el componente aquí para que React lo ejecute */}
      <ProductList /> 
    </div>
  );
}

export default App;