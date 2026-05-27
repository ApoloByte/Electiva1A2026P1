import type { Animal } from '../interfaces/Animal';

interface AnimalCardProps {
  animal: Animal;
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <h2 className="text-xl font-bold text-gray-800">{animal.name}</h2>
      <ul className="mt-2 text-gray-600">
        <li><strong>Edad:</strong> {animal.age} años</li>
        <li><strong>Color:</strong> {animal.color}</li>
        {animal.height && <li><strong>Altura:</strong> {animal.height} cm</li>}
      </ul>

      <div className="mt-4">
        {animal.isPet ? (
          <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold">
            Es una mascota
          </span>
        ) : (
          <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-semibold">
            No es una mascota
          </span>
        )}
      </div>
    </div>
  );
};