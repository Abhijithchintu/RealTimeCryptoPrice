import { useEffect } from "react";
import useAuthorize from "../hooks/useAuthorize";
const Layout = ({ children }) => {

    const {isLoggedIn}=useAuthorize();

    if(!isLoggedIn){
        return null;
    }
    
    return (
      <div>
        {children}
      </div>
    );
  };
  
  export default Layout;
  