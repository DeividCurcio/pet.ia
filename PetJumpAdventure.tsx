import { useState, useRef, useEffect } from 'react';
import { useGameStore } from '@store/gameStore';
import { Stage, Layer, Rect, Image as KonvaImage } from 'react-konva';

export default function PetJumpAdventure() {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [active, setActive] = useState(false);
  const [petY, setPetY] = useState(180);
  const [jumping, setJumping] = useState(false);
  const [obstacles, setObstacles] = useState([{ x: 400, y: 200 }]);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const addScore = useGameStore(s => s.addScore);

  useEffect(() => {
    if (!active) return;
    const gameLoop = setInterval(() => {
      setObstacles(obs => obs.map(o => ({ ...o, x: o.x - 5 })).filter(o => o.x > -40));
      if (Math.random() < 0.03) setObstacles(obs => [...obs, { x: 400, y: 200 }]);
      setScore(s => s + 1);
    }, 50);
    return () => clearInterval(gameLoop);
  }, [active]);

  const startGame = () => {
    setScore(0);
    setTimer(60);
    setActive(true);
    setPetY(180);
    setObstacles([{ x: 400, y: 200 }]);
    interval.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(interval.current!);
          setActive(false);
          addScore({ userId: 'u1', game: 'jump-adventure', score });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const jump = () => {
    if (!active || jumping) return;
    setJumping(true);
    setPetY(100);
    setTimeout(() => {
      setPetY(180);
      setJumping(false);
    }, 400);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mb-2">Tempo: {timer}s</div>
      <div className="text-3xl mb-2">Score: {score}</div>
      <Stage width={400} height={240} className="bg-pastelBlue rounded-lg mb-4" onClick={jump}>
        <Layer>
          <Rect x={0} y={0} width={400} height={240} fill="#AEEFFF" />
          <Rect x={0} y={220} width={400} height={20} fill="#C8FFD4" />
          <Rect x={40} y={petY} width={32} height={32} fill="#FFD1DC" cornerRadius={16} />
          {obstacles.map((o, i) => (
            <Rect key={i} x={o.x} y={o.y} width={32} height={20} fill="#E1CFFF" cornerRadius={8} />
          ))}
        </Layer>
      </Stage>
      <button className="bg-pastelBlue px-4 py-2 rounded-lg text-white font-bold" onClick={startGame} disabled={active}>
        {active ? 'Jogando...' : 'Iniciar'}
      </button>
    </div>
  );
}
