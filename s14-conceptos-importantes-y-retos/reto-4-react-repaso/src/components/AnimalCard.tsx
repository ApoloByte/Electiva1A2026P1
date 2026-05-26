import type { Animal } from '../hooks/useAnimals';

interface AnimalCardProps {
    animal: Animal;
    index: number;
    onTogglePet: (id: number) => void;
    source?: 'local' | 'api';
}

export const AnimalCard = ({ animal, index, onTogglePet, source = 'local' }: AnimalCardProps) => {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-emerald-500 transition-colors duration-200">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-emerald-400 font-mono">
                    #{index + 1} — {animal.name}
                </h3>
                {source === 'api' && (
                    <span className="text-xs bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded-full">API</span>
                )}
            </div>

            <div className="grid grid-cols-2 gap-1 text-sm text-slate-300 mb-4">
                <span className="text-slate-500">Edad:  </span>     <span>{animal.age} años,</span>
                <span className="text-slate-500"> Color: </span>    <span>{animal.color} ,</span>
                <span className="text-slate-500"> Altura: </span>   <span>{animal.height}</span>
            </div>

            {source === 'local' ? (
                <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={animal.isPet}
                        onChange={() => onTogglePet(animal.id)}
                        className="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                    <span className="text-sm text-slate-400">
                        ¿Es mascota?{' '}
                        <strong className={animal.isPet ? 'text-emerald-400' : 'text-rose-400'}>
                            {animal.isPet ? 'Sí' : 'No'}
                        </strong>
                    </span>
                </label>
            ) : (
                <p className="text-sm text-slate-400">
                    ¿Es mascota?{' '}
                    <strong className={animal.isPet ? 'text-emerald-400' : 'text-rose-400'}>
                        {animal.isPet ? 'Sí' : 'No'}
                    </strong>
                </p>
            )}
        </div>
    );
};
