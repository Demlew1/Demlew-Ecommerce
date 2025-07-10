import { FaEye } from "react-icons/fa";
import { useState } from "react";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] focus:outline-none"
          placeholder="Enter your full name"
          required
        />
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
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] focus:outline-none"
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
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] focus:outline-none pr-10"
            placeholder="Create a password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
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
          Avatar
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          className="w-full px-2 py-1 text-[10px] sm:text-xs font-['Montserrat'] border border-gray-300 rounded-md file:mr-4 file:py-1 file:px-2 file:border-0 file:text-xs file:bg-cyan-900 file:text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-950 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Sign Up
      </button>
    </form>
  );
}
