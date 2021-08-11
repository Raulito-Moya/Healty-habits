import { useReducer } from "react";
import AppContext from "./app-context";
import { appReducer } from "./app-reducer";

import { SET_CHANGE_PATH, SET_IS_LOADING } from "./types"


export const AppState = (props) => {

  const initialState = {
    isLoading:false,
    changePath:false
  }


   const [state, dispatch] = useReducer(appReducer, initialState)

 
   const setisLoading = (boolean) => {
      dispatch({
         type: SET_IS_LOADING,
         payload:boolean
      })

   }


   const setChangePath = (path) => {
       dispatch({
          type: SET_CHANGE_PATH,
          payload: path
       })

   }


 return(
   
    <AppContext.Provider
     value={{
        isLoading:state.isLoading,
        changePath:state.changePath,
        setisLoading,
        setChangePath
     }}
    >

      {props.children}
      
    </AppContext.Provider>

 )


}

