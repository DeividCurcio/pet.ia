import { useUserStore } from '@store/userStore';
import { useGameStore } from '@store/gameStore';

const stages = {
  egg: '/virtual/egg.png',
  baby: '/virtual/baby.png',
  teen: '/virtual/teen.png',
  adult: '/virtual/adult.png',
};

export default function VirtualPet() {
  const pet = useUserStore(s => s.virtualPet);
  const energy = useGameStore(s => s.energy);
  if (!pet) return <div className="text-center">Adote um pet virtual!</div>;
  return (
    <div className="flex flex-col items-center">
      <img src={stages[pet.stage]} alt={pet.stage} className="w-32 h-32 mb-2 animate-bounce" />
      <div className="flex gap-2 mb-2">
        <span className="bg-pastelPink px-2 py-1 rounded">Felicidade: {pet.happiness}</span>
        <span className="bg-pastelYellow px-2 py-1 rounded">Fome: {pet.hunger}</span>
        <span className="bg-pastelBlue px-2 py-1 rounded">Energia: {energy}</span>
      </div>
      <div className="flex gap-2">
        <button className="bg-pastelGreen px-3 py-1 rounded" onClick={() => {}}>Alimentar</button>
        <button className="bg-pastelPurple px-3 py-1 rounded" onClick={() => {}}>Brincar</button>
        <button className="bg-pastelBlue px-3 py-1 rounded" onClick={() => {}}>Cuidar</button>
      </div>
    </div>
  );
}
