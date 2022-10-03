import React, { useState,useMemo,useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { useStorage } from '../../context/useStorage';
import { ArticleSingle } from './ArticleSingle';

export const Articlebyid = ({ history , match}) => {
    
  
    
    const { articleid } = match.params
     
    
   const {articlesStorage, setArticles, setChangePath} = useStorage()


   // const articlefinded = articlesStorage.filter((article) =>  article._id == articleid )
 
   const article = useMemo(()=> getarticlebyid(articleid),[])
  
   function getarticlebyid(){
     
    return articlesStorage.find( article => article._id == articleid );
   }
   
  

 // if ( !article ) {
 //  return <Redirect to="/articles" />;
 //}
  
   console.log('article', article)

  return (
    <>
      <ArticleSingle article={article} key={article._id}/>
    </>
    )
}
