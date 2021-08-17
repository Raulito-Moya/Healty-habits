import { useForm } from "react-hook-form";
import { loginUser } from "../API/loginUser";
import { sendEmailresetPassword } from "../API/sendEmailresetPassword";
import { sendresetPassword } from "../API/sendResetPassword";




  const useLoginForm = (history) => {

    const { register, handleSubmit,watch, formState: { errors } }= useForm({
        mode: "onBlur",
      });

      const onSubmit = async(data,e) => {

         const res = await loginUser(data)
         const {name, email, redirect} = res
         console.log(res);
         setTimeout(() => {
          history.push(redirect)
          }, 1000);
      

      };


      const onSubmitEmailforPassword = async(data,e) => {
        
        const res = await sendEmailresetPassword(data)
        
      }


      const onSubmitFormPasswords = async(data,e)=>{
          
         const res = await sendresetPassword(data)
         const { redirect} = res 

         setTimeout(() => {
          history.push(redirect)
          }, 1000);
      }

    return{ register, handleSubmit,onSubmit,onSubmitEmailforPassword,onSubmitFormPasswords, errors }


  }

  export default useLoginForm