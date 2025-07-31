import { useState } from "react";
import axios from "axios";
import ProductForm from "../components/Home/ProductForm";
import ImagePreviewGrid from "../components/Home/ImagePreviewGrid";
import UploadInput from "../components/Home/uploadInput";
import { FaSpinner } from "react-icons/fa";

export default function ProductUploader() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number>(1);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);
    const previewUrls = fileArray.map((file) => URL.createObjectURL(file));

    setPreviewImages((prev) => [...prev, ...previewUrls]);
    setImageFiles((prev) => [...prev, ...fileArray]);
    setError("");
  };

  const removeImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !price || !description || imageFiles.length === 0) {
      setError("Please fill in all fields and upload at least one image.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const imageUrls = previewImages;

      const payload = {
        title,
        price: Number(price),
        description,
        categoryId,
        images: imageUrls,
      };

      await axios.post("https://api.escuelajs.co/api/v1/products", payload);
      setSuccess(true);

      setTitle("");
      setPrice("");
      setDescription("");
      setPreviewImages([]);
      setImageFiles([]);
    } catch {
      setError("Failed to post product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 font-['Rubik'] border-1 border-cyan-950 my-3 transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Add New Product
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Fill in the details below to list your product
      </p>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          Product posted successfully!
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      <ProductForm
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />

      <ImagePreviewGrid images={previewImages} onRemove={removeImage} />

      <UploadInput onChange={handleImageChange} />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900 shadow-md hover:shadow-lg"
        } text-white transition-all`}
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin" />
            <span>Posting Product...</span>
          </>
        ) : (
          "Post Product"
        )}
      </button>
    </form>
  );
}
