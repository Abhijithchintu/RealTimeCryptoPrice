import { useEffect } from "react";
import { app, loginAnonymous } from "../lib/realm";
import { useSelector, useDispatch } from "react-redux";
import { setFetching, updateList, setIsLoggedIn} from '../lib/store'

const useFetchStocksList=()=>{
  const {list= [], activeStock='',isFetching= false ,isLoggedIn= false} = useSelector(state=>state.cryptoData);

  const dispatch = useDispatch();

  useEffect(() => {
    let changeStream;
    const fetchDataAndListenForChanges = async () => {
     try{
      dispatch(updateList([]));
      dispatch(setFetching(true));
      // await loginAnonymous();
      const mongo = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongo.db("your-db-name").collection("your-collection-name");

      const initialData = await collection.find();
      dispatch(updateList(initialData));

      changeStream = collection.watch();
      
      changeStream.on('change', async (change) => {
        console.log(change);
        const updatedData = await collection.find();
        dispatch(updateList(initialData));
      });
     }catch(error){
       console.error(error)
    }finally{
      dispatch(setFetching(false));
    }
    };

    if(isLoggedIn){
      fetchDataAndListenForChanges();
    }
    return () => {
      if (changeStream) {
        changeStream.close();
      }
    };
  }, [activeStock, dispatch, isLoggedIn]);

  useEffect(()=>{
    loginAnonymous().then(()=>setIsLoggedIn(true));
  },[]);

  return {list, activeStock, isFetching}
};
export default useFetchStocksList;