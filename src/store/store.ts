import { create } from "zustand";

export interface EmailStore {
  email: string;
  setEmail: (email: string) => void;
}

export const useStore = create<EmailStore>((set) => ({
  email: "",
  setEmail: (email: string) => set(() => ({ email })),
}));
