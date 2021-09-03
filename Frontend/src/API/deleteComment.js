
export const deleteComment = async(id) => {
   console.log(id);
    
    const headers = new Headers();
  
    // const formData = new FormData(select)
     
    
   
      const setting = {
        method: 'DELETE',
        headers:headers,
        
      }
   
     
       try {
         
           let res = await fetch(`/api/comments/deletecomment/${id}`, setting);
           let json = await res.json();
         
           return json
           
         } catch (error) {
            console.log(error);
        }
   
   
   



}