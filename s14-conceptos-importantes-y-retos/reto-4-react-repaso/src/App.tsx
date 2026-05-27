import { useState } from 'react';
import { Animals } from './components/reto1/Animals';
import { Images } from './components/reto2/Images';
import { ProductManager } from './components/reto3/ProductManager';

function App() {
  // Estado para controlar cuál reto estamos viendo
  const [activeTab, setActiveTab] = useState<'reto1' | 'reto2' | 'reto3'>('reto1');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', padding: '30px 20px', color: '#fff' }}>
      
      {/* Cabecera del Panel */}
      <div style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '28px', color: '#fff' }}>Laboratorio Global - Reto 4</h1>
        <p style={{ margin: '0', color: '#a1a1aa', fontSize: '14px' }}>
          Integración de Retos Anteriores Refactorizados con Hooks y Props
        </p>
      </div>

      {/* Menú de Navegación Estilizado */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
        <button
          onClick={() => setActiveTab('reto1')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #3a3a3c',
            backgroundColor: activeTab === 'reto1' ? '#4ade80' : '#1c1c1e',
            color: activeTab === 'reto1' ? '#000' : '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          🐾 Reto 1: Animales
        </button>

        <button
          onClick={() => setActiveTab('reto2')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #3a3a3c',
            backgroundColor: activeTab === 'reto2' ? '#4ade80' : '#1c1c1e',
            color: activeTab === 'reto2' ? '#000' : '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          🖼️ Reto 2: Galería
        </button>

        <button
          onClick={() => setActiveTab('reto3')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #3a3a3c',
            backgroundColor: activeTab === 'reto3' ? '#4ade80' : '#1c1c1e',
            color: activeTab === 'reto3' ? '#000' : '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          💄 Reto 3: Catálogo
        </button>
      </div>

      {/* Renderizado Condicional del Reto Activo */}
      <div style={{ background: '#121214', borderRadius: '12px', padding: '20px', border: '1px solid #1c1c1e' }}>
        {activeTab === 'reto1' && <Animals />}
        {activeTab === 'reto2' && <Images />}
        {activeTab === 'reto3' && <ProductManager />}
      </div>

    </div>
  );
}

export default App;