import { useContext } from "react";
import appContext from "./app-context";

 export const useStorage = () => {
  
  return useContext(appContext)
 

}

