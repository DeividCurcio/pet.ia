// Mock de pets, usuários, posts, scores, leaderboards, shop
export const mockPets = [
  { id: '1', name: 'Luna', breed: 'Shih Tzu', bio: 'Alegre e carinhosa', photo: '/pet1.png' },
  { id: '2', name: 'Thor', breed: 'Golden', bio: 'Ama correr no parque', photo: '/pet2.png' },
];
export const mockUsers = [
  { id: 'u1', wallet: '0x123...abcd', name: 'Alice', avatar: '/user1.png' },
  { id: 'u2', wallet: '0x456...efgh', name: 'Bob', avatar: '/user2.png' },
];
export const mockPosts = [
  { id: 'p1', userId: 'u1', petId: '1', photo: '/pet1.png', caption: 'Primeiro passeio!', likes: 12, comments: 3 },
  { id: 'p2', userId: 'u2', petId: '2', photo: '/pet2.png', caption: 'Hora do banho', likes: 8, comments: 1 },
];
export const mockScores = [
  { userId: 'u1', game: 'tap-frenzy', score: 1200 },
  { userId: 'u2', game: 'tap-frenzy', score: 900 },
];
export const mockLeaderboard = [
  { rank: 1, userId: 'u1', score: 1200 },
  { rank: 2, userId: 'u2', score: 900 },
];
export const mockShop = [
  { id: 'b1', name: 'Booster 2x', type: 'booster', price: 10, currency: 'PET' },
  { id: 'c1', name: 'Coleira Rosa', type: 'cosmetic', price: 5, currency: 'PET' },
];
