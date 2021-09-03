
export const updateComment = async(value,id,select) => {
   
    
    const headers = new Headers();
  
     const formData = new FormData(select)
      formData.append('content',value)
    
   
      const setting = {
        method: 'PUT',
        headers:headers,
        body: formData
      }
   
     
       try {
         
           let res = await fetch(`/api/comments/updatecomment/${id}`, setting);
           let json = await res.json();
         
           return json
           
         } catch (error) {
            console.log(error);
        }
   
   
   



}