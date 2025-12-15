import { MiniKitProvider } from '@worldcoin/minikit-js';
import { ReactNode } from 'react';

export default function MiniKitProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <MiniKitProvider app_id="petworld-app">
      {children}
    </MiniKitProvider>
  );
}
