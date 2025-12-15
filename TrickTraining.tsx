import { useState } from 'react';
import { useGameStore } from '@store/gameStore';

const commands = ['🐶 Senta', '🔄 Rola', '🤚 Dá pata', '🗣️ Fala'];

export default function TrickTraining() {
  const [sequence, setSequence] = useState([commands[0]]);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [active, setActive] = useState(false);
  const addScore = useGameStore(s => s.addScore);

  const startGame = () => {
    setSequence([commands[Math.floor(Math.random() * commands.length)]]);
    setInput('');
    setScore(0);
    setTimer(60);
    setActive(true);
    const interval = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(interval);
          setActive(false);
          addScore({ userId: 'u1', game: 'trick-training', score });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const repeatSequence = () => {
    if (!active) return;
    setScore(s => s + 10 * sequence.length);
    setSequence(seq => [...seq, commands[Math.floor(Math.random() * commands.length)]]);
    setInput('');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Tempo: {timer}s</div>
      <div className="text-3xl mb-2">Score: {score}</div>
      <div className="mb-4">Sequência: {sequence.join(' ➡️ ')}</div>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold mb-2" onClick={repeatSequence} disabled={!active}>Repetir Sequência</button>
      <button className="bg-pastelGreen px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
