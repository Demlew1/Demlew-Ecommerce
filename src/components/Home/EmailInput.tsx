import type { InputProps } from "../../types/typeSignUp";

export default function EmailInput({ value, onChange }: InputProps) {
  return (
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
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-['Montserrat'] focus:outline-none"
        placeholder="Enter your email"
        required
      />
    </div>
  );
}
