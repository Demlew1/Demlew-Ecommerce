import { FaTimes } from "react-icons/fa";

type ImagePreviewGridProps = {
  images: string[];
  onRemove: (index: number) => void;
};

export default function ImagePreviewGrid({
  images,
  onRemove,
}: ImagePreviewGridProps) {
  if (images.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {images.map((src, index) => (
        <div key={index} className="relative group hover:scale-105 transition">
          <img
            src={src}
            alt={`Preview ${index}`}
            className="h-28 w-28 object-cover rounded-lg border"
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow hover:bg-red-700"
          >
            <FaTimes className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}
