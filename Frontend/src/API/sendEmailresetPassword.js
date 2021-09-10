

export const sendEmailresetPassword = async(data) => {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json')
   
     const { email } = data
     
     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify({email:email}) 
      }
    
       localStorage.setItem('user_email',email)

    try {
      
        let res = await fetch(`/api/auth/emailresetpassword`, setting);
        let json = await res.json()
        return json
      } catch (error) {
         console.log(error);
     }





}