import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MiniKitProvider } from '@worldcoin/minikit-js';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MiniKitProvider app_id="petworld-app">
      <Component {...pageProps} />
    </MiniKitProvider>
  );
}
