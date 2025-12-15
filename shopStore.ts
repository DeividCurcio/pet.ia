import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ShopItem } from './types';

interface ShopState {
  inventory: ShopItem[];
  tokens: number;
  addItem: (item: ShopItem) => void;
  spendTokens: (amount: number) => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      inventory: [],
      tokens: 0,
      addItem: (item) => set({ inventory: [...get().inventory, item] }),
      spendTokens: (amount) => set({ tokens: get().tokens - amount }),
    }),
    { name: 'petworld-shop' }
  )
);
