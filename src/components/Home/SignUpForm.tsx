import { FaEye, FaUser } from "react-icons/fa";

export default function SignUpForm() {
  return (
    <form className="space-y-4">
      {/* Name Field */}
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
            className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs focus:outline-none pl-10"
            placeholder="Enter your name"
            required
          />
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Email Field */}
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
          className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs focus:outline-none"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password Field */}
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

      {/* Avatar Upload (Styled as a button) */}
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
          />
          <label
            htmlFor="avatar"
            className="px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs font-['Montserrat'] cursor-pointer bg-white hover:bg-gray-50"
          >
            Choose File
          </label>
          <span className="text-xs text-gray-500">No file chosen</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-950 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Sign Up
      </button>
    </form>
  );
}
