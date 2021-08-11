import React from 'react'
import { useArtcicle } from '../../Hooks/useArticle'
import { ArticlesRun } from './Articles'
import { ArticleSingle } from './ArticleSingle'
import { BackLinkbuttom } from './ExerciseArticles'




const HealtyFoodArticle = () => {
   
  const {gethealthyFoodArticles} =  useArtcicle()
   
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