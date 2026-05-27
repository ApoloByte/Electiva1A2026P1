import type { Animal } from '../../hooks/useAnimalFilter';

interface AnimalRowProps {
  animal: Animal;
}

export const AnimalRow = ({ animal }: AnimalRowProps) => {
  return (
    <tr style={{ borderBottom: '1px solid #333' }}>
      <td style={{ padding: '12px', color: '#fff', fontSize: '15px' }}>{animal.name}</td>
      <td style={{ padding: '12px', color: '#a1a1aa', fontSize: '15px' }}>{animal.type}</td>
      <td style={{ padding: '12px', color: animal.isPet ? '#4ade80' : '#f87171', fontSize: '15px' }}>
        {animal.isPet ? 'Sí' : 'No'}
      </td>
    </tr>
  );
};