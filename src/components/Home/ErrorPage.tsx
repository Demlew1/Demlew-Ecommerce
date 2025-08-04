import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold text-cyan-800 mb-4 font-['Kanit']">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-['Kanit']">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 font-['Rubik']">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 transition-colors font-['Kanit']"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
