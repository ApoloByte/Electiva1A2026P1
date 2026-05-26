import { IMAGE_BASE_URL } from '../hooks/useImages';

interface ImageCardProps {
  imageName: string;
}

export const ImageCard = ({ imageName }: ImageCardProps) => {
  return (
    <li className="flex flex-col items-start gap-1">
      <p className="text-sm text-gray-700">{imageName}</p>
      <img
        src={`${IMAGE_BASE_URL}/uploads/${imageName}`}
        alt={imageName}
        className="w-48 h-auto rounded shadow"
      />
    </li>
  );
};
