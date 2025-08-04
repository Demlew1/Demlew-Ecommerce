import { FaEye } from "react-icons/fa";
import type { InputProps } from "../../types/typeSignUp";

export default function PasswordInput({ value, onChange }: InputProps) {
  return (
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
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-['Montserrat'] focus:outline-none pr-10"
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
  );
}
