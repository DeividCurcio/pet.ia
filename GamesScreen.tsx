import BottomTabs from './layout/BottomTabs';
export default function GamesScreen() {
  return (
    <div className="min-h-screen bg-pastelBlue flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-pastelPurple mb-4">Mini-Games</h1>
        <p className="text-lg text-pastelPink">Jogue e ganhe rewards!</p>
      </div>
      <BottomTabs active="games" />
    </div>
  );
}
