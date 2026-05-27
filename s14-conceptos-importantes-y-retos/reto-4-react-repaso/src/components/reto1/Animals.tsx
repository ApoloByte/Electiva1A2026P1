import { useAnimalFilter } from '../../hooks/useAnimalFilter';
import { AnimalRow } from './AnimalRow';
import { Mensaje } from './Mensaje';

export const Animals = () => {
  const { searchTerm, setSearchTerm, filteredAnimals } = useAnimalFilter();

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ color: '#fff', marginBottom: '5px' }}>Buscador de Animales - Reto 1</h2>
      <p style={{ color: '#a1a1aa', fontSize: '14px', marginTop: '0', marginBottom: '20px' }}>
        Refactorizado con Hooks y Props
      </p>
      
      <input
        type="text"
        placeholder="Buscar por nombre o tipo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '20px', 
          borderRadius: '6px', 
          border: '1px solid #444', 
          background: '#1c1c1e', 
          color: '#fff',
          boxSizing: 'border-box'
        }}
      />

      {filteredAnimals.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #444', color: '#4ade80' }}>
              <th style={{ padding: '12px' }}>Nombre</th>
              <th style={{ padding: '12px' }}>Tipo</th>
              <th style={{ padding: '12px' }}>¿Es Mascota?</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.map((animal, index) => (
              <AnimalRow key={index} animal={animal} />
            ))}
          </tbody>
        </table>
      ) : (
        <Mensaje texto={`No se encontraron animales que coincidan con "${searchTerm}"`} />
      )}
    </div>
  );
};