import { useForm } from "react-hook-form";
import { createUser } from "../API/CreateUser";
import { postConfirmationMail } from "../API/postConfirmationMail";


  const useSignUpForm = (history) => {

    const { register, handleSubmit,watch, formState: { errors } }= useForm({
        mode: "onBlur",
      });

      const onSubmit = async(data,e) => {
        e.preventDefault()
        //console.log('me estoy llamado')
        const res =   await createUser(data)
        console.log(res);
        const {token, redirect, name} = res
        
        //console.log(token);
       const confirm = await postConfirmationMail(token)

       confirm && localStorage.setItem('userToken',token )
       confirm && localStorage.setItem('userName',name )

        setTimeout(() => {
           history.push(redirect)
        }, 1000);
       
      };

    return{register, handleSubmit,onSubmit,errors }


  }

  export default useSignUpForm