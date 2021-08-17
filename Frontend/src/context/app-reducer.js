import { SET_ARTICLES, SET_CHANGE_PATH, SET_IS_LOADING, SET_TOKEN } from "./types"



export const appReducer = (state, action) => {

  switch (action.type) {

      case SET_IS_LOADING:
          return{
             ...state,
             isLoading: action.payload

          }
          
      case SET_CHANGE_PATH:
         return{
           ...state,
           changePath: action.payload
         }   
         
         
      case SET_ARTICLES:
        return{
          ...state,
          articles: action.payload
        }   
    
      
          
  }




} 