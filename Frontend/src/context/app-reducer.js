import { SET_CHANGE_PATH, SET_IS_LOADING } from "./types"



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
  
      
          
  }




} 