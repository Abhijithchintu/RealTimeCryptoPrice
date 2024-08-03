import {Stock} from '../models/stock'

export async function fetchStockPrice(symbol: string) {
    try{
        const dbres = await Stock.find({symbol: symbol}).sort({lastMessage: 1}).limit(1)
        console.log('data is', dbres)
    } catch(ex) {
        console.log('error while fetching data')
    }
    

}