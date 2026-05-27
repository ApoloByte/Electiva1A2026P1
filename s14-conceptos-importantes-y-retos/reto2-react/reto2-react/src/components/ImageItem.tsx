// Definimos la Prop que va a recibir
interface ImageItemProps {
  imageName: string;
}

export const ImageItem = ({ imageName }: ImageItemProps) => {
  return (
    <li className="mb-8 font-bold">
      {/* Nombre de la imagen */}
      {imageName}
      
      {/* Etiqueta img apuntando a la ruta de uploads */}
      <img 
        src={`https://electiva5-api.apolobyte.top/uploads/${imageName}`} 
        alt={imageName} 
        className="mt-3 max-w-md rounded shadow-lg border border-gray-600"
      />
    </li>
  );
};