import { useEffect } from "react";
import { app, loginAnonymous } from "../lib/realm";
import { useSelector, useDispatch } from "react-redux";
import { setFetching, updateList, setIsLoggedIn, updateStock, addToList} from '../lib/store'

const useFetchStocksList=()=>{
  const {list=[], activeStock='',isFetching= false } = useSelector(state=>state.cryptoData);

  const dispatch = useDispatch();


  const onStockChange=(value: any)=>{
    dispatch(updateStock(value))
  }

  useEffect(() => {
    const fetchDataAndListenForChanges = async () => {
     try{
      const mongo = app.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongo?.db("test").collection("stocks");
      const initialData = await collection?.find();

      dispatch(updateList(JSON.parse(JSON.stringify(initialData))));

      (async()=>{
        for await (const change of collection.watch()) {
          switch (change.operationType){
            case "insert": {
                const { fullDocument } = change;
                dispatch(addToList(JSON.parse(JSON.stringify(fullDocument))));
                break;
            }
          }
      }}
      )();

     }catch(error){
      console.error(error)
    }finally{
      dispatch(setFetching(false));
    }
    };

      fetchDataAndListenForChanges();

  }, [dispatch]);


  useEffect(()=>{
    loginAnonymous().then(()=>setIsLoggedIn(true));
  },[]);

  return {list, activeStock, isFetching, onStockChange}
};
export default useFetchStocksList;