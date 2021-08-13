
const getActiveArticles = async() => {
  
    const headers = new Headers();
    headers.append('Accept', 'application/json');
 



    const setting = {
        method: 'GET',
        headers:headers,
      
      }

      try {
         
         let res = await fetch(`/api/articles`, setting)
         let json = await res.json()
         
         return json.articles
      } catch (error) {
          console.log(error);
      }


}

export default getActiveArticles