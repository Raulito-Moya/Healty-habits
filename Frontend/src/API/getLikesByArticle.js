
export const getLikesByArticles = async(article) => {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json')

   
    const setting = {
       method: 'GET',
       headers:headers,
       
     }

 
  try {
     
    let res = await fetch(`/api/likes/getlikes/${article._id}`, setting);
    let json = await res.json()
    

    return json.likesfound.length
  } catch (error) {
     console.log(error);
 }



}