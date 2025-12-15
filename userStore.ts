import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Pet, VirtualPet } from './types';

interface UserState {
  user: User | null;
  pets: Pet[];
  virtualPet: VirtualPet | null;
  setUser: (user: User) => void;
  addPet: (pet: Pet) => void;
  setVirtualPet: (pet: VirtualPet) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      pets: [],
      virtualPet: null,
      setUser: (user) => set({ user }),
      addPet: (pet) => set({ pets: [...get().pets, pet] }),
      setVirtualPet: (pet) => set({ virtualPet: pet }),
    }),
    { name: 'petworld-user' }
  )
);
