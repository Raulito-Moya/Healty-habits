import { useState } from "react";
import getActiveArticles from "../API/getActiveArticles";
import { postAddLike } from "../API/postAddLike";
import { articles } from "../assess/mock";
import { useStorage } from "../context/useStorage";



export const useArtcicle = (articlesStorage) => {
    

    const [likes, setLikes] = useState(0)
    const [thanks, setThanks] = useState('help the article with a like')   
   

   let articlesActive = getActiveArticles()
  // console.log(articlesActive);
   
    const addLike = async(article) => {
     
      const json = await postAddLike(article)
       console.log(json);
       
         if(json?.rest){
          setLikes(likes - 1)
          setThanks('help the article with a like')
         }else{
           setLikes(likes + 1)
           setThanks('Thanks!!')
         }
         
    }
    

    const getExercisesArticles = () => {
         if(articlesStorage){
           const result =   articlesStorage.filter( (article)=> article.category === 'Fit' );
      
           return result;
         }     

      
      
    }

    const gethealthyFoodArticles = () => {
      if(articlesStorage){
      const result = articlesStorage.filter( (article)=> article.category === 'Healty Food' || article.category === 'Healty Integral' )
   
       return result
      } 
    }

 return {likes,setLikes,thanks, addLike ,getExercisesArticles, gethealthyFoodArticles }

}
