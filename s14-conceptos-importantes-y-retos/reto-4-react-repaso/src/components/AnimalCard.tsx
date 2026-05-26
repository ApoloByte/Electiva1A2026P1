import type { AnimalData } from '../hooks/useAnimals';

interface AnimalCardProps {
  animal: AnimalData;
  index: number;
}

export const AnimalCard = ({ animal, index }: AnimalCardProps) => {
  if (!animal.isPet) return null;

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 text-white shadow-sm hover:border-slate-600 transition-colors">
      <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">
        Animal {index + 1}
      </h4>
      <div className="space-y-1 text-xs text-slate-300">
        <p><span className="text-slate-400 font-medium">Nombre:</span> {animal.name}</p>
        <p><span className="text-slate-400 font-medium">Edad:</span> {animal.age} años</p>
        <p><span className="text-slate-400 font-medium">Color:</span> {animal.color}</p>
        <p><span className="text-slate-400 font-medium">Es mascota:</span> Sí</p>
        <p><span className="text-slate-400 font-medium">Estatura:</span> {animal.height} cm</p>
      </div>
    </div>
  );
};