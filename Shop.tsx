import { mockShop } from '@mock/mockData';
import { useShopStore } from '@store/shopStore';

export default function Shop() {
  const addItem = useShopStore(s => s.addItem);
  const spendTokens = useShopStore(s => s.spendTokens);
  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold text-pastelPurple mb-2">Loja Pet</h2>
      <div className="grid grid-cols-2 gap-2">
        {mockShop.map(item => (
          <div key={item.id} className="bg-pastelYellow rounded-lg p-2 flex flex-col items-center">
            <span className="font-bold text-pastelBlue mb-1">{item.name}</span>
            <span className="mb-1">{item.price} {item.currency}</span>
            <button className="bg-pastelBlue px-2 py-1 rounded text-white text-xs" onClick={() => { addItem(item); spendTokens(item.price); }}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
