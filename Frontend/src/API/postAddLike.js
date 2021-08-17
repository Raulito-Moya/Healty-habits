

export const postAddLike = async(article) => {
     

    const headers = new Headers();
     headers.append('Accept', 'application/json');
     headers.append('Content-Type', 'application/json')

     const data = {
        article: article
     }
     
     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify(data) 
      }

   console.log(data);
   try {
      
     let res = await fetch(`/api/likes/addlike`, setting);
     let json = await res.json()
     console.log(json);
   } catch (error) {
      console.log(error);
  }


}