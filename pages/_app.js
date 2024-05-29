import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import Layout from '../components/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {

  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
