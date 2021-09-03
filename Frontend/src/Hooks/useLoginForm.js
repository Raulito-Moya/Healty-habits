import { useForm } from "react-hook-form";
import { loginUser } from "../API/loginUser";
import { sendEmailresetPassword } from "../API/sendEmailresetPassword";
import { sendresetPassword } from "../API/sendResetPassword";
import { useStorage } from "../context/useStorage";




  const useLoginForm = (history) => {
     const {diferentPassword,errorLogin,setLoginError, setDiferentPassword, isLoading, setisLoading} =  useStorage()

    const { register, handleSubmit,watch, formState: { errors } }= useForm({
        mode: "onBlur",
      });

      const onSubmit = async(data,e) => {
         setisLoading(true)

         const res = await loginUser(data)
         const {name, email, redirect, token} = res
           console.log(res);

         if(res.error){
          setisLoading(false)
          return setLoginError(res.error)
         } 

         res && localStorage.setItem('userToken',token )
         res && localStorage.setItem('userName',name )
         
        
         
         redirect &&  setTimeout(() => {
           setisLoading(false)
          history.push(redirect)
          
          }, 1000);
      

      };


      const onSubmitEmailforPassword = async(data,e) => {
        setisLoading(true)

        const res = await sendEmailresetPassword(data)
        const { redirect} = res
         
      

      redirect &&   setTimeout(() => {
        setisLoading(false)
          history.push(redirect)
          }, 1000);
      }


      const onSubmitFormPasswords = async(data,e) => {
        setisLoading(true)
         const res = await sendresetPassword(data)
         const { redirect } = res 
         if(res.error){
          setisLoading(false) 
          setDiferentPassword(res.error) 
        }    
         
         
        redirect && setTimeout(() => {
          setisLoading(false) 
          history.push(redirect)
          }, 1000);
      }

    return{ register, handleSubmit,onSubmit,onSubmitEmailforPassword,onSubmitFormPasswords,diferentPassword,errorLogin,isLoading, errors }


  }

  export default useLoginForm