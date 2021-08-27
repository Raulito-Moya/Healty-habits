import { useState } from "react"
import styled from "styled-components"

export const ModalConfirmations = () => {
    
  const [state,setState] = useState(true)

  const Page = styled.section`
    margin-top: 0px;
   
     display:flex;
    justify-content:center;
    align-items:center;
    background-color: black;
    padding: 15px;
      margin-top: ${props => (props.state === true ? '78px' : '0px')};
    transition-property: margin-top;
    transition-duration: 2s;
     transition-timing-function: ease;
     transition-delay: 0;
    
    `

   const MessageCard = styled.article`
 
    justify-self: center;
    display: flex;
       flex-direction: column;
       background: aquamarine;
   
   `
 
      // setState(true)
  
 /*setTimeout(() => {
    setState(true)   
 }, 3000);
  clearTimeout(6000)*/



 return(
   <Page state={state}>
     <MessageCard >Confimration something ej:your passwor have been changed</MessageCard>
     <button type="click" onClick={()=>setState(false)}>off</button>
   </Page>
 )


}