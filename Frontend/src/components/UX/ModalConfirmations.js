import { useState } from "react"
import styled from "styled-components"

export const ModalConfirmations = () => {
    
  const [state,setState] = useState(false)

  const Page = styled.section`
 
     display:flex;
    justify-content:center;
    align-items:center;
    background-color: black;
    padding: 15px;
       margin-top: ${props => (props.state === true ? '58px' : '0px')};
     transition: margin-top,ease-in,4s;
    `

   const MessageCard = styled.article`
 
    justify-self: center;
    display: flex;
       flex-direction: column;
       background: aquamarine;
   
   `
 
      // setState(true)
  
 setTimeout(() => {
    setState(true)   
 }, 2000);
  
 clearTimeout(4000)    

 return(
   <Page state={state}>
     <MessageCard >Confimration something ej:your passwor have been changed</MessageCard>

   </Page>
 )


}