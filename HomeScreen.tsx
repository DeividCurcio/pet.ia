import BottomTabs from './layout/BottomTabs';
export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-pastelPink flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-pastelPurple mb-4">Pet World</h1>
        <p className="text-lg text-pastelBlue">Feed social de pets e mini-games!</p>
      </div>
      <BottomTabs active="home" />
    </div>
  );
}
