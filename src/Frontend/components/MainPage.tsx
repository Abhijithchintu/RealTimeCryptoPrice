import Head from "next/head";
import useFetchStocksList  from '../hooks/useFetchStocksList';


export default function Home() {

  const {list, activeStock, isFetching}=useFetchStocksList();
  console.log('___  list--', list)
  
  return (
    <>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="crypto app" />
      </Head>
        
    </>
  );
}
