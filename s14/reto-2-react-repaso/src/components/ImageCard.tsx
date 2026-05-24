interface ImageCardProps {
  imageUrl: string
  imageName: string
}

// tarjeta simple para cada imagen
export const ImageCard = ({ imageUrl, imageName }: ImageCardProps) => {
  return (
    <li className="group overflow-hidden rounded-3xl border border-[#e8d0f5] bg-white/95 shadow-lg shadow-[#d6b9e7]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#d7b6f0]/40">
      <img
        src={imageUrl}
        alt={imageName}
        className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="space-y-2 p-4">
        <p className="text-sm font-semibold text-[#7d4b8b]">{imageName}</p>
        <p className="text-xs text-[#a57dbc]">{imageUrl}</p>
      </div>
    </li>
  )
}
