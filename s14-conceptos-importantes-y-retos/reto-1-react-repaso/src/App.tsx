import { useState, useEffect } from 'react';
import Bienvenida from './components/Bienvenida';
import { type Animal } from './interfaces/Animal';

function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const obtenerAnimales = async () => {
      try {
        const respuesta = await fetch('https://electiva5-api.apolobyte.top/animals');
        
        const datos: Animal[] = await respuesta.json();
        
        setAnimals(datos);
      } catch (error) {
        console.error("Hubo un error al obtener los animales:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerAnimales();
  }, []); 

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Bienvenida />

      <h2 style={{ textAlign: 'center', color: '#1f2937', marginTop: '30px' }}>
        🐾 Registros de Animales desde la API
      </h2>
      
      {cargando ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>Cargando animales...</p>
      ) : (
        <div style={styles.contenedorTarjetas}>
          {animals.map((animal, index) => (
            <div key={index} style={styles.tarjeta}>
              <h3 style={styles.nombre}>{animal.name}</h3>
              <hr style={styles.separador} />
              
              <p style={styles.dato}><strong>Edad:</strong> {animal.age} años</p>
              <p style={styles.dato}><strong>Color:</strong> {animal.color}</p>
              <p style={styles.dato}><strong>Altura:</strong> {animal.height} m</p>
              
              {/* Operador ternario evaluando isPet */}
              {animal.isPet ? (
                <div style={styles.contenedorEstado}>
                  <span style={styles.etiquetaMascota}>
                    🏡 Es una Mascota
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
  etiquetaMascota: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 'bold' as const,
    display: 'inline-block',
    backgroundColor: '#dcfce7',
    color: '#15803d',
    border: '1px solid #bbf7d0'
  }
};

export default App;