import { useState } from "react"
import styled from "styled-components"
import { ListItem } from "../Header/Header"
import { Link } from 'react-router-dom'

export const ModalConfirmations = () => {
    
 

  const Page = styled.section`
    margin-top: 0px;
   
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: grey;
    padding: 10px;
    margin-top: ${props => (props.state === true ? '78px' : '0px')};
    transition-property: margin-top;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0;
    
    `

   const MessageCard = styled.article`
 
    justify-self: center;
    display: flex;
       flex-direction: row;
       background: aquamarine;
   
   `
 
      // setState(true)
  
 /*setTimeout(() => {
    setState(true)   
 }, 3000);
  clearTimeout(6000)*/

  const [state,setState] = useState(true)

 let isLoged = localStorage.getItem('userToken')
 console.log(isLoged);


 return(
   <Page state={state}>
    {
     !isLoged && (
       <>
        <MessageCard >
         Login your account for can post your article in the blog
        
        </MessageCard>
       
        </>)
      }
       {
      isLoged && (
        <MessageCard >
         <p>  Now You  can post your article in the blog</p>
         <Link to="/articles/createarticle" onClick={()=>setState(false)}> create article</Link>
        </MessageCard>)
      }

     <button type="click" onClick={()=>setState(false)}>off</button>
   </Page>
 )


}