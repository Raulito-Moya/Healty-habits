

export const postAddLike = async(article) => {
   const token = localStorage.getItem('userToken')

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

  // console.log(data);
   try {
      
     let res = await fetch(`/api/likes/addlike/${token}`, setting);
     let json = await res.json()
     return json
     console.log(json);
   } catch (error) {
      console.log(error);
  }


}