import { useGameStore } from '@store/gameStore';

export default function RewardsClaim() {
  const energy = useGameStore(s => s.energy);
  const streak = useGameStore(s => s.streak);
  const rewards = useGameStore(s => s.rewards);
  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold text-pastelPurple mb-2">Rewards & Claim</h2>
      <div className="mb-2">Pet Energy: <span className="font-bold text-pastelBlue">{energy}</span></div>
      <div className="mb-2">Streak diário: <span className="font-bold text-pastelGreen">{streak}x</span></div>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold mb-2">Claim via MiniKit</button>
      <div className="text-xs text-pastelPink">Histórico:</div>
      <ul>
        {rewards.map(r => (
          <li key={r.id}>{r.type} +{r.amount} ({r.date})</li>
        ))}
      </ul>
    </div>
  );
}
