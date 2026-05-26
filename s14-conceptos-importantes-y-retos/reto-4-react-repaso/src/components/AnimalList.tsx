import { useAnimals } from '../hooks/useAnimals';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
    const { animals, apiAnimals, loading, toggleIsPet, fetchApiAnimals } = useAnimals();

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-md font-mono">RETO 1</span>
                <h2 className="text-2xl font-bold text-white">Lista de Animales</h2>
            </div>

            <p className="text-slate-400 text-sm mb-4"> Datos locales </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {animals.map((animal, i) => (
                    <AnimalCard
                        key={`local-${animal.id}`}
                        animal={animal}
                        index={i}
                        onTogglePet={toggleIsPet}
                        source="local"
                    />
                ))}
            </div>

            <div className="mt-8">
                <button
                    onClick={fetchApiAnimals}
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-200 cursor-pointer mb-4"
                >
                    {loading ? 'Cargando...' : 'Obtener animales de la API'}
                </button>

                {apiAnimals.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {apiAnimals.map((animal, i) => (
                            <AnimalCard
                                key={`api-${i}`}
                                animal={animal}
                                index={i}
                                onTogglePet={() => { }}
                                source="api"
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
