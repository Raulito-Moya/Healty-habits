import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { articles } from "../../assess/mock"
import { useStorage } from "../../context/useStorage"
import LoadingPage from "../UX/LoadingPage"
import { ArticleSingle } from "./ArticleSingle"

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

  const {isLoading, setisLoading} = useStorage() 
  const [show,setShow] = useState(false)
  const elementref =  useRef()
   console.log(isLoading);
 
  
   
 return(


    
  
     <ArticlesRun >
     
        {articles.map(( article ) => (

         <ArticleSingle  key={article.id} article={article}/>

        ))}

     </ArticlesRun>
 
  

 )


}

export default Articles