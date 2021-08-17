

 export const postConfirmationMail = async(token) => {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json')
   
    const data = {
        token: token
     }
     
     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify(data) 
      }

    try {
      
        let res = await fetch(`/api/auth/confirmation`, setting);
        let json = await res.json()
        return json
      } catch (error) {
         console.log(error);
     }


}
 
 