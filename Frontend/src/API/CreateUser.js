

export const createUser = async(data) => {
     

    const headers = new Headers();
     headers.append('Accept', 'application/json');
     headers.append('Content-Type', 'application/json')

     const  {
        name,email,password,confirmPassword
     } = data 
     
     const setting = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify({name,email,password}) 
     }

   console.log(data);
   try {
      
     let res = await fetch(`/api/users/createuser`, setting);
     let json = await res.json()
     return json  //token con id de usuario
   } catch (error) {
      console.log(error);
  }


}