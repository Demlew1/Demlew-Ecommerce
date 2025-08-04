interface AvatarUploadProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName?: string;
}

export default function AvatarUpload({
  onFileChange,
  fileName,
}: AvatarUploadProps) {
  return (
    <div>
      <label
        htmlFor="avatar"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Profile Picture (Optional)
      </label>
      <div className="flex items-center gap-2">
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
        <label
          htmlFor="avatar"
          className="px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] cursor-pointer bg-white hover:bg-gray-50"
        >
          Choose File
        </label>
        <span className="text-xs text-gray-500">
          {fileName || "No file chosen"}
        </span>
      </div>
    </div>
  );
}
