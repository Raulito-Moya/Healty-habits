
export const sendresetPassword = async(data) => {
     const token = localStorage.getItem('userToken') 
     console.log(token);

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json')
    
     
    
     const user_email = localStorage.getItem('user_email')
     data["user_email"] = user_email
     console.log(data);

     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify(data) 
      }

    try {
      
        let res = await fetch(`/api/auth/resetpassword`, setting);
        let json = await res.json()
        return json
      } catch (error) {
         console.log(error);
     }




   


}