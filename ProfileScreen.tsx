import BottomTabs from './layout/BottomTabs';
export default function ProfileScreen() {
  return (
    <div className="min-h-screen bg-pastelPurple flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-pastelPink mb-4">Meu Perfil</h1>
        <p className="text-lg text-pastelBlue">Gerencie sua conta e pets.</p>
      </div>
      <BottomTabs active="profile" />
    </div>
  );
}
