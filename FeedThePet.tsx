import { useState, useRef } from 'react';
import { useGameStore } from '@store/gameStore';

export default function FeedThePet() {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [active, setActive] = useState(false);
  const [targetX, setTargetX] = useState(100);
  const [combo, setCombo] = useState(1);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const addScore = useGameStore(s => s.addScore);

  const startGame = () => {
    setScore(0);
    setTimer(60);
    setActive(true);
    setCombo(1);
    setTargetX(Math.random() * 200 + 50);
    interval.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(interval.current!);
          setActive(false);
          addScore({ userId: 'u1', game: 'feed-the-pet', score });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const throwFood = () => {
    if (!active) return;
    // Simula acerto se targetX entre 120 e 180
    if (targetX > 120 && targetX < 180) {
      setScore(s => s + 10 * combo);
      setCombo(c => Math.min(c + 1, 5));
    } else {
      setCombo(1);
    }
    setTargetX(Math.random() * 200 + 50);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Tempo: {timer}s</div>
      <div className="text-3xl mb-2">Score: {score}</div>
      <div className="mb-4">Combo: x{combo}</div>
      <div className="relative w-64 h-32 bg-pastelYellow rounded-lg flex items-end justify-center mb-4">
        <div style={{ left: targetX }} className="absolute bottom-0 w-16 h-16 bg-pastelPink rounded-full flex items-center justify-center text-3xl transition-all" >🐶</div>
        <button className="absolute top-0 left-1/2 -translate-x-1/2 bg-pastelBlue text-white px-4 py-2 rounded-lg" onClick={throwFood} disabled={!active}>Jogar Comida</button>
      </div>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
