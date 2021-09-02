import { useReducer } from "react";
import getActiveArticles from "../API/getActiveArticles";
import { getCommentsByArticle } from "../API/getCommentsByArticles";
import AppContext from "./app-context";
import { appReducer } from "./app-reducer";

import { SET_ARTICLES,SET_COMMENTS,NEW_COMMENT, SET_CHANGE_PATH, SET_DIFERENT_PASSWORD, SET_IS_LOADING, SET_LOGIN_ERROR } from "./types"


export const AppState = (props) => {

  const initialState = {
    isLoading: false,
    changePath: false,
    errorLogin: false,
    diferentPassword: false,
    articles: [],
    comments: [],
    newCommentSearch: false,
    token: null
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


 //:auth
 const setLoginError = (error) => {
    dispatch({
       type:SET_LOGIN_ERROR,
       payload:error
    })


 }

 const setDiferentPassword = (error) => {
    dispatch({
       type:SET_DIFERENT_PASSWORD,
       payload: error
    })
 }

  
 
  //articles
   const setArticles = async() => {
    
      const res = await getActiveArticles()
 
     dispatch({
       type:SET_ARTICLES,
       payload: res

     })

   }
   
   //comments
  const setComments = async(IDArticle) => {
     console.log(IDArticle);
    const res = await getCommentsByArticle(IDArticle)
    console.log(res);
    dispatch({
       type:SET_COMMENTS,
       payload:res
    })

  }

 const setcommentPosted = (boolean) => {
  
   dispatch({
      type:NEW_COMMENT,
      payload:boolean
   })
 }
 

 return(
   
    <AppContext.Provider
     value={{
        isLoading:state.isLoading,
        setisLoading,
        changePath:state.changePath,
        setChangePath,
        errorLogin:state.errorLogin,
        setLoginError,
        diferentPassword:state.diferentPassword,
        setDiferentPassword,
        articlesStorage: state.articles,
        setArticles,
        comments: state.comments,
        setComments,
        newCommentSearch: state.newCommentSearch,
        setcommentPosted

     
     }}
    >

      {props.children}
      
    </AppContext.Provider>

 )


}

