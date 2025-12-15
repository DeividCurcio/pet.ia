import { useState } from 'react';
import { useGameStore } from '@store/gameStore';

const patterns = [
  '⬅️➡️', '⬆️⬇️', '🔄', '✂️', '🛁'
];

export default function GroomingMaster() {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(45);
  const [active, setActive] = useState(false);
  const [pattern, setPattern] = useState('⬅️➡️');
  const [input, setInput] = useState('');
  const addScore = useGameStore(s => s.addScore);

  const startGame = () => {
    setScore(0);
    setTimer(45);
    setActive(true);
    setPattern(patterns[Math.floor(Math.random() * patterns.length)]);
    setInput('');
    const interval = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(interval);
          setActive(false);
          addScore({ userId: 'u1', game: 'grooming-master', score });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const doPattern = () => {
    if (!active) return;
    setScore(s => s + 10);
    setPattern(patterns[Math.floor(Math.random() * patterns.length)]);
    setInput('');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Tempo: {timer}s</div>
      <div className="text-3xl mb-2">Score: {score}</div>
      <div className="mb-4">Padrão: <span className="font-bold text-pastelPurple">{pattern}</span></div>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold mb-2" onClick={doPattern} disabled={!active}>Fazer Padrão</button>
      <button className="bg-pastelGreen px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
