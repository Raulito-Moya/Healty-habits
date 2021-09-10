import styled from "styled-components"


export const Page = styled.section`
 
 display:flex;
justify-content:center;
align-items:center;
padding: 15px;
    padding-top: 58px;


`

export const MessageCard = styled.article`
 
 justify-self: center;
 display: flex;
    flex-direction: column;
    background: aquamarine;

`

//todo:mejorar la UI UX de este componente
 export const EmailResetPasswordModal = () => {

  
 return(
   <Page>
     <MessageCard>
         <h4>We have sended you a confirmation email to this email for reset your password </h4>
     </MessageCard>

   </Page>


 )

}