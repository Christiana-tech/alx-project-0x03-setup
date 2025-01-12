import '../styles/globals.css'; // Include Tailwind CSS or your global styles
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/Layout.tsx';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
