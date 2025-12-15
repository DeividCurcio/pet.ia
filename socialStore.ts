import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Post } from './types';

interface SocialState {
  posts: Post[];
  addPost: (post: Post) => void;
  likePost: (postId: string) => void;
  commentPost: (postId: string) => void;
}

export const useSocialStore = create<SocialState>()(
  persist(
    (set, get) => ({
      posts: [],
      addPost: (post) => set({ posts: [...get().posts, post] }),
      likePost: (postId) => set({ posts: get().posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p) }),
      commentPost: (postId) => set({ posts: get().posts.map(p => p.id === postId ? { ...p, comments: p.comments + 1 } : p) }),
    }),
    { name: 'petworld-social' }
  )
);
