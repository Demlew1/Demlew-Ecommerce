import { useState } from "react";
import { signUpUser } from "../../services/api";
import { uploadToCloudinary } from "../../utils/cloudinary";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NameInput from "../Home/NameInput";
import EmailInput from "../Home/EmailInput";
import PasswordInput from "../Home/PasswordInput";
import AvatarUpload from "../Home/AvatarUpload";
import SubmitButton from "../Home/SubmitButton";

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
        ...form,
        avatar: avatarUrl || "https://i.imgur.com/Y3mYH0P.jpeg",
      });

      toast.success("Account created successfully!");
      setForm({ name: "", email: "", password: "", avatar: "" });
      setAvatarFile(null);
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <NameInput value={form.name} onChange={handleChange} />
      <EmailInput value={form.email} onChange={handleChange} />
      <PasswordInput value={form.password} onChange={handleChange} />
      <AvatarUpload
        onFileChange={handleFileChange}
        fileName={avatarFile?.name}
      />
      <SubmitButton loading={loading} />
    </form>
  );
}
