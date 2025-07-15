import { useState } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";

export default function ImageUploader() {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow font-['Rubik']">
      <h2 className="text-xl font-semibold text-center mb-4">Upload Images</h2>

      {/* Image Previews */}
      {previewImages.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {previewImages.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Preview ${index}`}
                className="h-24 w-24 object-cover rounded border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 text-xs group-hover:opacity-100 opacity-0 transition"
              >
                <FaTimes className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 py-6 px-4 rounded cursor-pointer hover:border-cyan-600 transition">
        <FaUpload className="text-cyan-800 text-xl" />
        <span className="text-sm text-gray-600">Click to upload images</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
}
