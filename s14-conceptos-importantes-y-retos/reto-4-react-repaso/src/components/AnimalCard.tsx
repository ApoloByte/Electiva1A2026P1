import type { Animal } from '../hooks/useAnimals';

interface AnimalCardProps {
  animal: Animal;
  index: number;
}

export const AnimalCard = ({ animal, index }: AnimalCardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-bold mb-2">Animal {index + 1}</h3>
      <p><span className="font-semibold">Nombre:</span> {animal.name}</p>
      <p><span className="font-semibold">Edad:</span> {animal.age}</p>
      <p><span className="font-semibold">Color:</span> {animal.color}</p>
      {animal.isPet ? <p><span className="font-semibold">Es mascota:</span> Sí</p> : null}
      <p><span className="font-semibold">Altura:</span> {animal.height} cm</p>
    </div>
  );
};
