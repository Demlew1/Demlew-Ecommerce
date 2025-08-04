import { useState } from "react";
import { FaEye, FaUser } from "react-icons/fa";
import { signUpUser } from "../../services/api";
import { uploadToCloudinary } from "../../utils/cloudinary";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setAvatarFile(file || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let avatarUrl = form.avatar;
      if (avatarFile) {
        avatarUrl = await uploadToCloudinary(avatarFile);
      }
      await signUpUser({
        name: form.name,
        email: form.email,
        password: form.password,
        avatar: avatarUrl || "https://i.imgur.com/Y3mYH0P.jpeg",
      });

      toast.success("Account created successfully!");
      setForm({ name: "", email: "", password: "", avatar: "" });
      setAvatarFile(null);

      setTimeout(() => navigate("/signin"), 1500);
    } catch (err: any) {
      toast.error(err.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs focus:outline-none pl-10"
            placeholder="Enter your name"
            required
          />
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs focus:outline-none"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] focus:outline-none pr-10"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FaEye className="h-4 w-4" />
          </button>
        </div>
      </div>

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
            onChange={handleFileChange}
          />
          <label
            htmlFor="avatar"
            className="px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] cursor-pointer bg-white hover:bg-gray-50"
          >
            Choose File
          </label>
          <span className="text-xs text-gray-500">
            {avatarFile?.name || "No file chosen"}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-950 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>
    </form>
  );
}
