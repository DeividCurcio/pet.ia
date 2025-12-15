import { useState } from 'react';
import { useGameStore } from '@store/gameStore';

const moves = [
  { name: 'Latido', icon: '🐶', beats: 'Miau' },
  { name: 'Miau', icon: '🐱', beats: 'Voar' },
  { name: 'Voar', icon: '🦜', beats: 'Latido' },
];

function getRandomMove() {
  return moves[Math.floor(Math.random() * moves.length)];
}

export default function PetParkBattle() {
  const [playerMove, setPlayerMove] = useState<any>(null);
  const [opponentMove, setOpponentMove] = useState<any>(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [active, setActive] = useState(false);
  const addScore = useGameStore(s => s.addScore);

  const startGame = () => {
    setPlayerMove(null);
    setOpponentMove(null);
    setResult('');
    setScore(0);
    setRound(1);
    setActive(true);
  };

  const playMove = (move: any) => {
    if (!active) return;
    const opp = getRandomMove();
    setPlayerMove(move);
    setOpponentMove(opp);
    if (move.beats === opp.name) {
      setResult('Vitória!');
      setScore(s => s + 20);
    } else if (opp.beats === move.name) {
      setResult('Derrota!');
    } else {
      setResult('Empate!');
    }
    setRound(r => {
      if (r >= 3) {
        setActive(false);
        addScore({ userId: 'u1', game: 'park-battle', score });
        return 1;
      }
      return r + 1;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Round: {round}/3</div>
      <div className="text-3xl mb-2">Score: {score}</div>
      <div className="mb-4">{result}</div>
      <div className="flex gap-4 mb-4">
        {moves.map(m => (
          <button key={m.name} className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold text-2xl" onClick={() => playMove(m)} disabled={!active}>{m.icon}</button>
        ))}
      </div>
      <button className="bg-pastelGreen px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
