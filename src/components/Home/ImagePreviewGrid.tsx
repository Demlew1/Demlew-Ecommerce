type ImagePreviewGridProps = {
  images: string[];
  onRemove: (index: number) => void;
};

export default function ImagePreviewGrid({
  images,
  onRemove,
}: ImagePreviewGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div key={i} className="relative">
          <img
            src={img}
            alt={`preview-${i}`}
            className="w-full h-28 object-cover rounded-md"
          />
          <button
            type="button"
            onClick={() => onRemove(i)}
            className="absolute top-1 right-1 text-red-500 bg-white rounded-full p-1 text-xs shadow hover:bg-red-100"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
