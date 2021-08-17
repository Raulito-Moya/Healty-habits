import React, { useEffect } from 'react'
import { useStorage } from '../../context/useStorage'
import { useArtcicle } from '../../Hooks/useArticle'
import { ArticlesRun } from './Articles'
import { ArticleSingle } from './ArticleSingle'
import { BackLinkbuttom } from './ExerciseArticles'




const HealtyFoodArticle = () => {
   
  const {articlesStorage, setArticles} = useStorage()
   console.log(articlesStorage);

  const {gethealthyFoodArticles} =  useArtcicle(articlesStorage)
   
  useEffect(()=>{
    setArticles()
 
 
    },[])



  let articles = gethealthyFoodArticles()

  return(
  <div>
     <BackLinkbuttom to="/">Atras</BackLinkbuttom>
 
   <ArticlesRun>
    { 
       typeof(articles) && articles.length >= 0 ?

        articles.map(( article ) => (
 
         <ArticleSingle key={article.id} article={article}/>
 
        ))
       :
       <h1>Lo siento mucho no hay nada</h1>
    }

   </ArticlesRun>
 </div>

  )


}

export default HealtyFoodArticle