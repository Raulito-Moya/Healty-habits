
export const sendresetPassword = async(data) => {
     const token = localStorage.getItem('userToken') 
     console.log(token);

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json')
     console.log(data);
    
     
     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify(data) 
      }

    try {
      
        let res = await fetch(`/api/auth/resetpassword/${token}`, setting);
        let json = await res.json()
        return json
      } catch (error) {
         console.log(error);
     }




   


}