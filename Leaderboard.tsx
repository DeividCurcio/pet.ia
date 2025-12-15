import { mockLeaderboard, mockUsers } from '@mock/mockData';

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold text-pastelPurple mb-2">Leaderboard Semanal</h2>
      <ol>
        {mockLeaderboard.map(entry => {
          const user = mockUsers.find(u => u.id === entry.userId);
          return (
            <li key={entry.rank} className="flex items-center mb-1">
              <span className="w-6 font-bold">#{entry.rank}</span>
              <img src={user?.avatar} alt={user?.name} className="w-6 h-6 rounded-full mx-2" />
              <span className="flex-1">{user?.name || entry.userId}</span>
              <span className="text-pastelBlue font-bold">{entry.score} pts</span>
            </li>
          );
        })}
      </ol>
      <div className="mt-2 text-xs text-pastelGreen">Top 100 ganham airdrop extra!</div>
    </div>
  );
}
