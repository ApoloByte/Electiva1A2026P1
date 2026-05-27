import { useImage } from "../hooks/useImage";

export const ImageManager = () => {
  const { images } = useImage();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Imágenes</h2>

      <ul className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <li key={index}>
            <img
              src={`https://electiva5-api.apolobyte.top/uploads/${img}`}
              alt="img"
              className="w-32 h-32 object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};