import { stockQueue } from './queue';
import {Stock} from "../models/stock"
import fetch from "node-fetch";
const stocks = ["bitcoin","ethereum","binancecoin","solana","maker"]

export class jobProcessor{
  static async fetchStockPrice(symbol: string) {
    const url = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=inr&precision=2&ids=${symbol}`;
    let opts = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': process.env.COIN_GECKO_API_KEY}
    };

    fetch(url, opts)
    .then((res: { json: () => any; }) => res.json())
    .then(async (json: any) => {
        const currentSymbol = Object.keys(json)[0];
        const currentPrice = json[currentSymbol].inr
        try{
            const createDbEntry = await Stock.create({symbol: currentSymbol, price: currentPrice})
            console.log('entry is created', createDbEntry)
        } catch(ex){
            console.log('error while inserting into db', ex)
        }
        
    })
    .catch((err: string) => console.error('error:' + err));
  }

  // Add jobs to the queue every 5 seconds
  static async addJobs(){
    console.log('starting process')
    setInterval(async () => {
      for (const symbol of stocks) {
        console.log('symbol feteched data',symbol)
        await stockQueue.add('fetch-price', { symbol },{ removeOnComplete: true, removeOnFail: true },);
      }
    }, 5000);
  }

}
