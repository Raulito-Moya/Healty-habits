import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname ,...rest} = useLocation();
//console.log(pathname);
 
  useEffect(() => {
   
   window.scrollTo(0,0)

  }, [pathname]);

  return null
}