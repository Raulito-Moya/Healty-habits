import { useState } from "react";
import getActiveArticles from "../API/getActiveArticles";
import { articles } from "../assess/mock";
import { useStorage } from "../context/useStorage";




export const useArtcicle = (articlesStorage) => {
    


    const [likes, setLikes] = useState(0)
    const [thanks, setThanks] = useState('Deja un like si te ha gustado el articulo')   
    
   let articlesActive = getActiveArticles()
  // console.log(articlesActive);

    const addLike = (e) => {
    
       if(likes === 0) {
        setLikes(likes + 1)
        setThanks('Gracias!!')
       }

       if(likes > 0) {
        setLikes(likes - 1)
        setThanks('Deja un like si te ha gustado el articulo')
       }
        
    
      //  e.target.disabled = true
    }
    

    const getExercisesArticles = () => {
     
      const result =  articlesStorage.filter( (article)=> article.category === 'Fit' )
      
      return result
      
    }

    const gethealthyFoodArticles = () => {
       
      const result = articlesStorage.filter( (article)=> article.category === 'HealtyFood' )
   
       return result
    }

 return {likes,thanks, addLike ,getExercisesArticles, gethealthyFoodArticles }

}
