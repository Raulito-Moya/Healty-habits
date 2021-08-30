
 export const postComment = async(data,select) => {

 const token = localStorage.getItem('userToken'); 
 const headers = new Headers();
 /* headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');*/
    
  const formData = new FormData(select)
 // formData.append()


   const setting = {
     method: 'POST',
     headers:headers,
     body: formData
   }

    // console.log(data);
    try {
      
        let res = await fetch(`/api/comments/addcomment/${token}`, setting);
        let json = await res.json();
        return json
        
      } catch (error) {
         console.log(error);
     }




}