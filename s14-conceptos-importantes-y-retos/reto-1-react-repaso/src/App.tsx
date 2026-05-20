import { useState } from 'react';
import Bienvenida from './components/Bienvenida';
import { type Animal } from './interfaces/Animal';

function App() {
  const [animals] = useState<Animal[]>([
    { name: "perro", age: 3, color: "Blanco y café", isPet: true, height: 0.55 },
    { name: "Luna", age: 2, color: "Gris atigrado", isPet: true, height: 0.25 },
    { name: "Simba", age: 5, color: "Dorado", isPet: false, height: 1.2 },
    { name: "Copito", age: 1, color: "Blanco", isPet: true, height: 0.15 },
    { name: "Zeus", age: 4, color: "Negro", isPet: true, height: 0.70 }
  ]);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Bienvenida />

      <h2 style={{ textAlign: 'center', color: '#1f2937', marginTop: '30px' }}>
        🐾 Registros de Animales
      </h2>
      
      <div style={styles.contenedorTarjetas}>
        
        {/* Aquí usamos .map para recorrer la lista */}
        {animals.map((animal, index) => (
          <div key={index} style={styles.tarjeta}>
            <h3 style={styles.nombre}>{animal.name}</h3>
            <hr style={styles.separador} />
            
            {/* Mostramos cada uno de los valores del objeto */}
            <p style={styles.dato}><strong>Edad:</strong> {animal.age} años</p>
            <p style={styles.dato}><strong>Color:</strong> {animal.color}</p>
            <p style={styles.dato}><strong>Altura:</strong> {animal.height} m</p>
            
            <div style={styles.contenedorEstado}>
              <span style={{
                ...styles.etiqueta,
                backgroundColor: animal.isPet ? '#dcfce7' : '#fee2e2',
                color: animal.isPet ? '#15803d' : '#b91c1c'
              }}>
                {animal.isPet ? '🏡 Mascota' : '🌲 Salvaje'}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

// Estilos
const styles = {
  contenedorTarjetas: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px',
    width: '220px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s'
  },
  nombre: {
    margin: '0 0 10px 0',
    color: '#111827',
    fontSize: '20px',
    textAlign: 'center' as const
  },
  separador: {
    border: '0',
    borderTop: '1px solid #e5e7eb',
    marginBottom: '12px'
  },
  dato: {
    margin: '6px 0',
    color: '#4b5563',
    fontSize: '14px'
  },
  contenedorEstado: {
    marginTop: '15px',
    textAlign: 'center' as const
  },
  etiqueta: {
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold' as const,
    display: 'inline-block'
  }
};

export default App;