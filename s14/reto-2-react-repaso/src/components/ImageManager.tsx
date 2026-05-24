import { ImageCard } from './ImageCard'
import { useImageList } from './useImageList'

const baseImageUrl = 'https://electiva5-api.apolobyte.top/uploads/'

export const ImageManager = () => {
  // usa el hook para obtener la lista de imagenes
  const { images, loading, error } = useImageList()

  return (
    <section className="space-y-8 rounded-[32px] bg-[#f7ecf8] p-6 shadow-[0_18px_60px_-30px_rgba(109,63,122,0.2)] sm:p-10">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#9b6bb7]">galería pastel</p>
        <h1 className="text-3xl font-semibold text-[#6d3f7a] sm:text-4xl">la mejor galería</h1>
      </div>

      {error && <div className="rounded-3xl border border-[#e5d5f0] bg-[#faf0fb] p-4 text-sm text-[#7f5d91]">{error}</div>}

      {loading ? (
        <div className="rounded-3xl border border-[#e5d5f0] bg-white p-8 text-center text-sm text-[#8f6fa3]">espera un momento, estoy cargando las fotos...</div>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {images?.map((imageName) => (
            <ImageCard
              key={imageName}
              imageName={imageName}
              imageUrl={`${baseImageUrl}${imageName}`}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
