import { useState } from "react";
import getActiveArticles from "../API/getActiveArticles";
import { postAddLike } from "../API/postAddLike";
import { articles } from "../assess/mock";
import { useStorage } from "../context/useStorage";



export const useArtcicle = (articlesStorage) => {
    

    const [likes, setLikes] = useState(0)
    const [thanks, setThanks] = useState('Deja un like si te ha gustado el articulo')   
    
   let articlesActive = getActiveArticles()
  // console.log(articlesActive);

    const addLike = async(article) => {
     
        await postAddLike(article)
       


       if(likes >= 0) {
        setLikes(likes + 1)
        setThanks('Gracias!!')
       }

      
        
    
      //  e.target.disabled = true
    }
    

    const getExercisesArticles = () => {
     
      const result =  articlesStorage.filter( (article)=> article.category === 'Fit' )
      
      return result
      
    }

    const gethealthyFoodArticles = () => {
       
      const result = articlesStorage.filter( (article)=> article.category === 'Healty Food' || article.category === 'Healty Integral' )
   
       return result
    }

 return {likes,setLikes,thanks, addLike ,getExercisesArticles, gethealthyFoodArticles }

}
