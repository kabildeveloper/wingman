import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });


export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
