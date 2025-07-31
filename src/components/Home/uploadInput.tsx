import { FaUpload } from "react-icons/fa";

type UploadInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadInput({ onChange }: UploadInputProps) {
  return (
    <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 py-8 px-4 rounded-lg cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 transition">
      <div className="bg-cyan-100 p-3 rounded-full">
        <FaUpload className="text-cyan-600 text-xl" />
      </div>
      <span className="text-sm font-medium text-gray-600">
        Drag & drop images here, or click to browse
      </span>
      <span className="text-xs text-gray-500">Supports JPG, PNG up to 5MB</span>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
}
