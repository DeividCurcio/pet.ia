// Tipos globais do Pet World
export type Pet = {
  id: string;
  name: string;
  breed: string;
  bio: string;
  photo: string;
};

export type VirtualPet = {
  id: string;
  stage: 'egg' | 'baby' | 'teen' | 'adult';
  happiness: number;
  hunger: number;
  energy: number;
  lastCare: string;
};

export type User = {
  id: string;
  wallet: string;
  name: string;
  avatar: string;
  worldIdVerified: boolean;
};

export type Post = {
  id: string;
  userId: string;
  petId: string;
  photo: string;
  caption: string;
  likes: number;
  comments: number;
};

export type GameScore = {
  userId: string;
  game: string;
  score: number;
};

export type LeaderboardEntry = {
  rank: number;
  userId: string;
  score: number;
};

export type Reward = {
  id: string;
  type: 'energy' | 'token' | 'booster';
  amount: number;
  date: string;
};

export type ShopItem = {
  id: string;
  name: string;
  type: 'booster' | 'cosmetic' | 'item';
  price: number;
  currency: 'PET' | 'WLD' | 'USDC';
};

export enum PetType {
  Dog = 'dog',
  Cat = 'cat',
  Bird = 'bird',
  Other = 'other',
}

export enum GameType {
  TapFrenzy = 'tap-frenzy',
  FeedThePet = 'feed-the-pet',
  JumpAdventure = 'jump-adventure',
  GroomingMaster = 'grooming-master',
  TrickTraining = 'trick-training',
  ParkBattle = 'park-battle',
  DailyPuzzle = 'daily-puzzle',
}

export enum RewardType {
  Energy = 'energy',
  Token = 'token',
  Booster = 'booster',
}
