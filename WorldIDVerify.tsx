import { useState } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

export default function WorldIDVerify({ onVerified }: { onVerified: () => void }) {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    setLoading(true);
    setError('');
    try {
      const proof = await MiniKit.commands.verify({ action: 'petworld-incognito' });
      if (proof) {
        setVerified(true);
        onVerified();
      }
    } catch (e: any) {
      setError('Falha na verificação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {verified ? (
        <span className="px-3 py-1 bg-pastelGreen text-white rounded-full">Verificado ✅</span>
      ) : (
        <button
          className="px-4 py-2 bg-pastelBlue text-white rounded-lg font-bold mt-2"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? 'Verificando...' : 'Verificar World ID'}
        </button>
      )}
      {error && <span className="text-red-500 mt-2">{error}</span>}
    </div>
  );
}
