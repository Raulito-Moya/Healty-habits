import { useReducer } from "react";
import getActiveArticles from "../API/getActiveArticles";
import AppContext from "./app-context";
import { appReducer } from "./app-reducer";

import { SET_ARTICLES, SET_CHANGE_PATH, SET_IS_LOADING } from "./types"


export const AppState = (props) => {

  const initialState = {
    isLoading:false,
    changePath:false,
    articles:[]
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


   const setArticles = async() => {
    
      const res = await getActiveArticles()
 
     dispatch({
       type:SET_ARTICLES,
       payload: res

     })

   }


 return(
   
    <AppContext.Provider
     value={{
        isLoading:state.isLoading,
        changePath:state.changePath,
        setisLoading,
        setChangePath,
        articlesStorage: state.articles,
        setArticles
     }}
    >

      {props.children}
      
    </AppContext.Provider>

 )


}

