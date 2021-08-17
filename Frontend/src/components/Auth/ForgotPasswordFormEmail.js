import { useEffect } from "react"
import { useStorage } from "../../context/useStorage"
import useLoginForm from "../../Hooks/useLoginForm"
import { SignForm } from "./LoginScreen"
import { ChangeSignWay, SignInputEmail } from "./SignUpScreen"

export const ForgotPasswordFormEmail = ({history}) => {
  
    const {register, handleSubmit,onSubmitEmailforPassword,errors} = useLoginForm(history)

    const {changePath,setChangePath} = useStorage()
    //console.log(changePath);
    
    useEffect(()=> {
  
      setChangePath(true)
    return ()=>{ setChangePath(false) }
    },[])


 return(
    <SignForm onSubmit={handleSubmit(onSubmitEmailforPassword) } errors={errors}>
        <h4>Please provide a email ,and then we'll send you information for get yout password</h4>
       <SignInputEmail name="email" register={register} errors={errors} />
        <button type="submit">send</button>
    </SignForm>
     
 )   


}