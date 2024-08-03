import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from '@/src/Frontend/lib/store'
import Layout from '@/src/Frontend/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return(<Provider store={store}><Layout><Component {...pageProps} /></Layout></Provider>)
}
