import { SET_ARTICLES, SET_COMMENTS,NEW_COMMENT, SET_CHANGE_PATH, SET_DIFERENT_PASSWORD, SET_IS_LOADING, SET_LOGIN_ERROR } from "./types"



export const appReducer = (state, action) => {

  switch (action.type) {
       // UI/UX
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
         
         //Articles
      case SET_ARTICLES:
        return{
          ...state,
          articles: action.payload
        }  
        
        //Comments
      case SET_COMMENTS:
        return{
          ...state,
          comments: action.payload
        }   
      
      case NEW_COMMENT:
        return{
          ...state,
          newCommentSearch: action.payload
        }
        
      //AUTH
      case SET_LOGIN_ERROR:
        return{
          ...state,
          errorLogin:action.payload
        }

      case SET_DIFERENT_PASSWORD:
        return{
          ...state,
          diferentPassword:action.payload
        }
      
          
  }




} 