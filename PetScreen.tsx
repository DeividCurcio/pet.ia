import BottomTabs from './layout/BottomTabs';
export default function PetScreen() {
  return (
    <div className="min-h-screen bg-pastelYellow flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-pastelPurple mb-4">Meu Pet Virtual</h1>
        <p className="text-lg text-pastelBlue">Cuide do seu pet real e virtual!</p>
      </div>
      <BottomTabs active="pet" />
    </div>
  );
}
