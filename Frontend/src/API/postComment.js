import { useState } from "react";
import { useStorage } from "../context/useStorage";


 export const postComment = async(article,select) => {
  
   console.log(select);
 const token = localStorage.getItem('userToken'); 
 const headers = new Headers();
 /* headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');*/
    
  const formData = new FormData(select)
   formData.append('IDarticle',article._id )
   console.log(select);

   const setting = {
     method: 'POST',
     headers:headers,
     body: formData
   }

    // console.log(data);
    try {
      
        let res = await fetch(`/api/comments/addcomment/${token}`, setting);
        let json = await res.json();
       console.log(json);
        localStorage.setItem('writerid',json.comment.writerid)
        return json
        
      } catch (error) {
         console.log(error);
     }




}