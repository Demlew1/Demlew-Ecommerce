import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../store/useAuthStore";
import { getUserProfile } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserProfile() {
  const { token, logout } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userProfile", token],
    queryFn: () => getUserProfile(token!),
    enabled: !!token, // 👈 This ensures query only runs if token exists
    retry: false,
  });

  const handleLogout = () => {
    logout();
    queryClient.clear();
    toast.success("Logged out successfully!");
    navigate("/signin");
  };

  if (!token) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="font-['Kanit'] text-gray-500 text-center text-lg bg-gray-100 p-6 rounded-md">
          No user is currently logged in.
        </p>
      </div>
    );
  }

  if (error)
    return (
      <p className="font-['Kanit'] text-red-500 text-center p-3 rounded-lg bg-red-50">
        {error.message}
      </p>
    );

  if (isLoading || !user)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="h-12 w-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-24 sm:mt-28 bg-white rounded-xl shadow-md overflow-hidden border border-cyan-200">
      <div className="h-32 bg-cyan-600 relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      <div className="pt-16 pb-6 px-6 text-center">
        <h2 className="font-['Kanit'] text-2xl font-bold text-gray-800">
          {user.name}
        </h2>
        <p className="font-['Rubik'] text-gray-600 mt-1">{user.email}</p>

        <div className="mt-4">
          <span className="font-['Kanit'] inline-block px-4 py-1 text-sm bg-cyan-100 text-cyan-800 rounded-full">
            {user.role.toUpperCase()}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-100 text-red-600 px-4 py-2 rounded-full font-['Kanit'] text-sm hover:bg-red-200 transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
