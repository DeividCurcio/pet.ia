import { useState, useRef } from 'react';
import { useGameStore } from '@store/gameStore';

export default function TapFrenzy() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(30);
  const [active, setActive] = useState(false);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const addScore = useGameStore(s => s.addScore);

  const startGame = () => {
    setCount(0);
    setTimer(30);
    setActive(true);
    interval.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(interval.current!);
          setActive(false);
          addScore({ userId: 'u1', game: 'tap-frenzy', score: count });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const tap = () => {
    if (!active) return;
    setCount(c => c + 1);
    if (window.navigator.vibrate) window.navigator.vibrate(20);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Tempo: {timer}s</div>
      <div className="text-3xl mb-4">Taps: {count}</div>
      <button
        className={`w-32 h-32 rounded-full bg-pastelPink text-4xl flex items-center justify-center shadow-lg mb-4 ${active ? 'animate-bounce' : ''}`}
        onClick={tap}
        disabled={!active}
      >🐾</button>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
