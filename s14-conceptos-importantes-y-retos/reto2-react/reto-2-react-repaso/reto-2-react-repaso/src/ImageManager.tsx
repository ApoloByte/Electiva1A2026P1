import { useState, useEffect } from 'react'

function ImageManager() {
  const [images, setImages] = useState<string[] | undefined>(undefined)

  const fetchImageList = async () => {
    const response = await fetch('https://electiva5-api.apolobyte.top/list-images')
    const data = await response.json()
    setImages(data.images)
  }

  useEffect(() => {
    fetchImageList()
  }, [])

  return (
    <div>
      <p>List all images</p>
      <ul>
        {images?.map((image, index) => (
          <li key={index}>
            <p>{image}</p>
            <img
              src={`https://electiva5-api.apolobyte.top/uploads/${image}`}
              alt={image}
              width={200}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageManager