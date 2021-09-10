import { useState } from "react"
import styled from "styled-components"
import { ListItem } from "../Header/Header"
import { Link } from 'react-router-dom'

export const ModalConfirmations = () => {
    
 

  const Page = styled.section`
   
     
    display:flex;
    position: fixed;
    justify-content:center;
    align-items:center;
    background-color: grey;
    padding: 5px;
    top: ${props => (props.state === true ? '80px' : '0px')};
    transition: all 1.5s ease;
    
    z-index: 100;
    `

   const MessageCard = styled.article`
 
    justify-self: center;
    display: flex;
       flex-direction: row;
       background: aquamarine;
   
   `
 
   

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
         <button type="click" onClick={()=>setState(false)}>off</button>
        </MessageCard>
       
        </>)
      }
       {
      isLoged && (
        <MessageCard >
         <p>  Now You  can post your article in the blog</p>
         <Link to="/articles/createarticle" onClick={()=>setState(false)}> create article</Link>
         <button type="click" onClick={()=>setState(false)}>off</button>
        </MessageCard>)
      }

     
   </Page>
 )


}