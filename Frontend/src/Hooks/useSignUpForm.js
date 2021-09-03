import { useForm } from "react-hook-form";
import { createUser } from "../API/CreateUser";
import { postConfirmationMail } from "../API/postConfirmationMail";
import { useStorage } from "../context/useStorage";


  const useSignUpForm = (history) => {
    const {errorLogin, setLoginError } =  useStorage()   


    const { register, handleSubmit,watch, formState: { errors } }= useForm({
        mode: "onBlur",
      });

      const onSubmit = async(data,e) => {
        e.preventDefault()
        console.log(data);
        //console.log('me estoy llamado')
        const res =   await createUser(data)
        console.log(res);
        const {token, redirect, name, writerid} = res
        console.log(res.error);
         if(res.error){ return setLoginError(res.error)}
        
           const confirm = await postConfirmationMail(token)

          confirm && localStorage.setItem('userToken',token )
          confirm && localStorage.setItem('userName',name )
          confirm && localStorage.setItem('writerid',writerid )
           
          

           setTimeout(() => {
              history.push(redirect)
           }, 1000);
       

      
      };

    return{register, handleSubmit,onSubmit,errors,errorLogin }


  }

  export default useSignUpForm