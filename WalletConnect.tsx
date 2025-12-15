import { useState } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

export default function WalletConnect() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await MiniKit.wallet.connect();
      if (result?.address) setAddress(result.address);
    } catch (e: any) {
      setError('Erro ao conectar wallet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {address ? (
        <span className="px-3 py-1 bg-pastelPurple text-white rounded-full">{address.slice(0,6)}...{address.slice(-4)}</span>
      ) : (
        <button
          className="px-4 py-2 bg-pastelBlue text-white rounded-lg font-bold mt-2"
          onClick={connectWallet}
          disabled={loading}
        >
          {loading ? 'Conectando...' : 'Conectar Wallet'}
        </button>
      )}
      {error && <span className="text-red-500 mt-2">{error}</span>}
    </div>
  );
}
