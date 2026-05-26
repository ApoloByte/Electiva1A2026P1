interface ImageCardProps {
    name: string;
    src: string;
    index: number;
}

export const ImageCard = ({ name, src, index }: ImageCardProps) => {
    return (
        <li className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-violet-500 transition-colors duration-200">
            <img
                src={src}
                alt={name}
                className="w-full h-48 object-cover"
                loading="lazy"
            />
            <div className="p-3">
                <span className="text-xs font-mono text-slate-400">#{index + 1}</span>
                <p className="text-sm text-white font-medium truncate">{name}</p>
            </div>
        </li>
    );
};
