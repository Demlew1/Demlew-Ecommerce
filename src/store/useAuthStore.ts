import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      logout: () => set({ token: null }),
      isAuthenticated: () => {
        const { token } = get();
        return !!token;
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
