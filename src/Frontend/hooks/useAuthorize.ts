import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAnonymous } from "../lib/realm";
import { setIsLoggedIn} from '../lib/store'


const useAuthorize=()=>{
    const {isLoggedIn} = useSelector(state=>state.cryptoData);
    const dispatch=useDispatch();

    useEffect(()=>{
        loginAnonymous()
        .then(()=>dispatch(setIsLoggedIn(true)))
        .catch(()=>dispatch(setIsLoggedIn(false)));
    },[dispatch]
    );

    return {isLoggedIn}
};

export default useAuthorize;