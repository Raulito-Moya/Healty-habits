import { useEffect } from "react"
import { useStorage } from "../../context/useStorage"
import useLoginForm from "../../Hooks/useLoginForm"
import { LoaderSpinner } from "../UX/LoaderSpiner"
import { SignForm } from "./LoginScreen"
import { ChangeSignWay, SignInputConfirmPassword, SignInputEmail, SignInputPassword } from "./SignUpScreen"

export const ForgotPasswordForm = ({history}) => {
  
    const {register, handleSubmit,onSubmitFormPasswords,errors,diferentPassword,isLoading} = useLoginForm(history)
    console.log(diferentPassword);
    const {changePath,setChangePath} = useStorage()
    //console.log(changePath);
    
    useEffect(()=> {
  
      setChangePath(true)
    return ()=>{ setChangePath(false) }
    },[])


 return(
    <SignForm onSubmit={handleSubmit(onSubmitFormPasswords) } errors={errors}>
        <h2>Please type your new password here please</h2>
       <SignInputPassword name="password" register={register} errors={errors} />
       <SignInputConfirmPassword name="confirmpassword" register={register} errors={errors} />
        <button type="submit">send</button>
        {diferentPassword && <h3>{diferentPassword}</h3>}
        {isLoading && <LoaderSpinner/>}
    </SignForm>
     
 )   


}