import { FaUser } from "react-icons/fa";
import type { InputProps } from "../../types/typeSignUp";

export default function NameInput({ value, onChange }: InputProps) {
  return (
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
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-['Montserrat'] focus:outline-none pl-10"
          placeholder="Enter your name"
          required
        />
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
