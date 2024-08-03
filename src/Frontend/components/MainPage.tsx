import Head from "next/head";
import useFetchStocksList  from '../hooks/useFetchStocksList';
import Select from 'react-dropdown-select'
import CustomTable from './CustomTable'
import { getFormattedList,COLUMNS } from '../helpers/MainPage.helpers';

const options = [
  { value: 'bitcoin', label: 'bitcoin' },
  { value: 'ethereum', label: 'ethereum' },
  { value: 'binancecoin', label: 'binancecoin' },
  { value: 'solana', label: 'solana' },
  { value: 'maker', label: 'maker' }
];



export default function Home() {
  const {list, activeStock, onStockChange}=useFetchStocksList();

  const formattedList=getFormattedList(list,activeStock);


  return (
    <>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="crypto app" />
      </Head>
        <Select options={options} onChange={(e)=>onStockChange(e?.[0]?.value)}  multi={false} values={[{'label': activeStock,'value': activeStock}]}/>
        <div style={{marginTop:'30px'}}>
          <CustomTable columns={COLUMNS} items={formattedList}/>
        </div>
        
    </>
  );
}
