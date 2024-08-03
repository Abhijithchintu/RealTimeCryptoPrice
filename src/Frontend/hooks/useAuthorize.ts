import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAnonymous } from "../lib/realm";
import { setIsLoggedIn} from '../lib/store'


const useAuthorize=()=>{
    const {isLoggedIn} = useSelector(state=>state.cryptoData);
    console.log('___  isLoggedIn--', isLoggedIn)
    const dispatch=useDispatch();

    useEffect(()=>{
        loginAnonymous()
        .then(()=>dispatch(setIsLoggedIn(true)))
        .catch(()=>dispatch(setIsLoggedIn(false)));
    },[dispatch]
    );

    useEffect(()=>{
        if(isLoggedIn){
            fetch('/api/startWorker');
        }
    },[isLoggedIn]);

    return {isLoggedIn}
};

export default useAuthorize;