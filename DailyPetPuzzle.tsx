import { useState } from 'react';
import { useGameStore } from '@store/gameStore';

const icons = ['🍖', '🦴', '🐾', '🧸', '🍗', '🎾'];
function randomGrid() {
  return Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => icons[Math.floor(Math.random() * icons.length)]));
}

export default function DailyPetPuzzle() {
  const [grid, setGrid] = useState(randomGrid());
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(15);
  const [active, setActive] = useState(false);
  const addScore = useGameStore(s => s.addScore);

  const startGame = () => {
    setGrid(randomGrid());
    setScore(0);
    setMoves(15);
    setActive(true);
  };

  const makeMove = () => {
    if (!active || moves <= 0) return;
    setScore(s => s + 20);
    setMoves(m => m - 1);
    if (moves - 1 === 0) {
      setActive(false);
      addScore({ userId: 'u1', game: 'daily-puzzle', score });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Movimentos: {moves}</div>
      <div className="text-3xl mb-2">Score: {score}</div>
      <div className="grid grid-cols-6 gap-1 mb-4">
        {grid.flat().map((icon, i) => (
          <button key={i} className="w-8 h-8 bg-pastelPink rounded text-xl" onClick={makeMove} disabled={!active}>{icon}</button>
        ))}
      </div>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
