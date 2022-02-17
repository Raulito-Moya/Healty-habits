import { useState } from "react"
import styled from "styled-components"
import { ListItem } from "../Header/Header"
import { Link } from 'react-router-dom'

export const ModalConfirmations = () => {
    
 

  const Page = styled.section`
   
     
 
    position: fixed;
    justify-content:center;
    align-items:center;
    background-color: grey;
    padding: 5px;
    top: ${props => (props.state === true ? '80px' : '-200px')};
    transition: all 1.5s ease;
    width: auto;
    height: 50px;
    z-index: 100;
    border-radius: 20px;
    width: 90%;
    `

   const MessageCard = styled.article`
     
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;
    background: aquamarine;
    border-radius: 20px;
    padding: 10px;
   `

   const Info = styled.p`
     font-size: 20px;
     

   `

   const Button = styled.button`
    align-self: center;
    border:none;
    font-size: 1.2em;
    border-radius: 5px;
    padding-left: 1.2em;
    padding-right: 1.2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
   `
 
 const LinkCreateArticle = styled(Link)`
  align-self: center;
  font-size :30px ;
  text-decoration: none;
  color: blue;
  &:hover{
    color:red
  }

 
 `
   

  const [state,setState] = useState(true)

 let isLoged = localStorage.getItem('userToken')
 //console.log(isLoged);


 return(
   <Page state={state}>
    {
     !isLoged && (
       <>
        <MessageCard >
        <Info>Login your account for can post your article in the blog</Info> 
         <Button type="click" onClick={()=>setState(false)}>off</Button>
        </MessageCard>
       
        </>)
      }
       {
      isLoged && (
        <MessageCard >
         <Info>  Now You  can post your article in the blog</Info>
         <LinkCreateArticle to="/articles/createarticle" onClick={()=>setState(false)}> create article</LinkCreateArticle>
         <Button type="click" onClick={()=>setState(false)}>off</Button>
        </MessageCard>)
      }

     
   </Page>
 )


}