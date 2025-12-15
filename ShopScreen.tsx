import BottomTabs from './layout/BottomTabs';
export default function ShopScreen() {
  return (
    <div className="min-h-screen bg-pastelGreen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-pastelPurple mb-4">Loja Pet</h1>
        <p className="text-lg text-pastelBlue">Compre itens com tokens!</p>
      </div>
      <BottomTabs active="shop" />
    </div>
  );
}
