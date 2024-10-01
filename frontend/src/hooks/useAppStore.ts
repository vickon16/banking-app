import { User } from "@/gql/graphql";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppStore {
  user: User | null;
  setUser: (user: User | null) => void;
  resetStore: () => void;
}

const useAppStore = create(
  persist<AppStore>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      resetStore: () => set({ user: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAppStore;
