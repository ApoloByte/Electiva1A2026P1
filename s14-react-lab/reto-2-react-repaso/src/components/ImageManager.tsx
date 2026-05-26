import { useEffect, useState } from 'react'

const LIST_IMAGES_URL = 'https://electiva5-api.apolobyte.top/list-images'
const UPLOADS_BASE_URL = 'https://electiva5-api.apolobyte.top/uploads/'

const ImageManager = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined)

  const fetchImageList = async () => {
    const response = await fetch(LIST_IMAGES_URL)
    const data: { images: string[] } = await response.json()
    setImages(data.images)
  }

  useEffect(() => {
    fetchImageList()
  }, [])

  return (
    <ul className="image-list">
      {images?.map((imageName) => (
        <li key={imageName}>
          <img
            src={`${UPLOADS_BASE_URL}${imageName}`}
            alt={imageName}
          />
        </li>
      ))}
    </ul>
  )
}

export default ImageManager
