import { useState } from "react";
import { useStorage } from "../context/useStorage";


 export const getCommentsByArticle = async(id) => {
  

 const token = localStorage.getItem('userToken'); 
 const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  
  const data = {
      IDarticle:id
  }

   const setting = {
     method: 'GET',
     headers:headers,

   }

    // console.log(data);
    try {
      
        let res = await fetch(`/api/comments/getcomments/${id}`, setting);
        let json = await res.json();
        //console.log(json);
        return json
        
      } catch (error) {
         console.log(error);
     }




}