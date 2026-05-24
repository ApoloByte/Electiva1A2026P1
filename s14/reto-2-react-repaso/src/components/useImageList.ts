import { useEffect, useState } from 'react'

export const useImageList = () => {
  // hook para cargar la lista de imagenes
  const [images, setImages] = useState<string[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // lee la lista desde el servidor una sola vez
    const fetchImageList = async () => {
      try {
        const response = await fetch('https://electiva5-api.apolobyte.top/list-images')
        if (!response.ok) {
          throw new Error('error al cargar lista')
        }

        const data = (await response.json()) as { images?: string[] }
        setImages(data.images)
      } catch (err) {
        console.error(err)
        setError('no se pudo cargar las imagenes')
        setImages([])
      } finally {
        setLoading(false)
      }
    }

    fetchImageList()
  }, [])

  return { images, loading, error }
}
