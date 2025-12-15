import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameScore, Reward } from './types';

interface GameState {
  scores: GameScore[];
  streak: number;
  energy: number;
  rewards: Reward[];
  addScore: (score: GameScore) => void;
  addReward: (reward: Reward) => void;
  incrementStreak: () => void;
  addEnergy: (amount: number) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      scores: [],
      streak: 0,
      energy: 0,
      rewards: [],
      addScore: (score) => set({ scores: [...get().scores, score] }),
      addReward: (reward) => set({ rewards: [...get().rewards, reward] }),
      incrementStreak: () => set({ streak: get().streak + 1 }),
      addEnergy: (amount) => set({ energy: get().energy + amount }),
    }),
    { name: 'petworld-game' }
  )
);
