

export const loginUser = async(data) => {
     

    const headers = new Headers();
     headers.append('Accept', 'application/json');
     headers.append('Content-Type', 'application/json')

     const  {
        email,password
     } = data 
     
     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify({email,password}) 
     }

   console.log(data);
   try {
      
     let res = await fetch(`/api/auth/login`, setting);
     let json = await res.json()
     return json  //token con id de usuario
   } catch (error) {
      console.log(error);
  }


}