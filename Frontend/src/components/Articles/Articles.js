import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import getActiveArticles from "../../API/getActiveArticles"
import { articles } from "../../assess/mock"
import { useStorage } from "../../context/useStorage"
import LoadingPage from "../UX/LoadingPage"
import { ArticleSingle } from "./ArticleSingle"
import { CommentScreen } from "./CommentScreen"

 export const ArticlesRun = styled.main`
  display: flex;
  width: 100%;
  flex-flow: column;
 
  margin-top: 70px;

align-items: center;
 & > div:first-child {
    margin-top: 20px;
 }

`


 
const Articles = () => {

  
   const {articlesStorage, setArticles} = useStorage()
   
   
   useEffect(()=>{
   setArticles()


   },[])


  const {isLoading, setisLoading} = useStorage() 
  
  const elementref =  useRef()
  
 
   
  
 return(

     <ArticlesRun >
   
     { 
      articlesStorage.length > 0 ?(

          articlesStorage.map(( article ) => (
          <ArticleSingle  key={article.id} article={article}/>
          
         ))
        ) : <p>   no articles yet</p>
       }

     </ArticlesRun>
 )

}

export default Articles