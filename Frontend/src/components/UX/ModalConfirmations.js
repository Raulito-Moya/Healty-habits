import { useState } from "react"
import styled from "styled-components"
import { ListItem } from "../Header/Header"
import { Link } from 'react-router-dom'
import { useHeader } from "../../Hooks/useHeader"
import  "./Modal.css"

export const ModalConfirmations = () => {
     
   const {NavisOpen} = useHeader()

  const up = 100 + 'px'
  const down = 500 + 'px'

  const Page = styled.section`
   
     
 
    position: fixed;
    justify-content:center;
    align-items:center;
   
    padding: 5px;
  
    width: auto;
    height: auto;
   
    border-radius: 20px;
    width: 90%;
    `

   const MessageCard = styled.div`

     display: flex;
     flex-direction: row;
     align-items: flex-start;
     align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
   
    padding: 5px;
  
    width: auto;
    height: auto;
   
  
    width: 90%;
    
  background-color: red ;
   // background-color: ${(props) => (props.state.active === true ? "red" : "blue")};
    border-radius: 20px;
    padding: 10px;

    position: fixed;
    top: 200px ;
    z-index: 100;
 //   top: ${(props) => (props.state.active === false &&  "500px")};
    transform: translateY(50px);
   
    transition: background-color 3s ease;


   `;
 


   const Info = styled.p`
     font-size: 20px;
     padding-left:30px;

   `

   const Button = styled.button`
    align-self: center;
    justify-self: end;
    border:none;
    font-size: 1.2em;
    border-radius: 5px;
    padding-left: 1.2em;
    padding-right: 1.2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    
    &:hover{
    
     background-color: green;
     cursor: pointer;
   
   }
   transition: all 2s ease;
   
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
   

  const [state,setState] = useState({active:false})

 let isLoged = localStorage.getItem('userToken')
 //console.log(isLoged);
 console.log(state.active);

 return(
   <>
    {
     !isLoged && (
    
        <div  state={state} className={ !state.active ? "transit1": "transit2"}>
         <Info>Login your account and post your article in the blog!!</Info> 
         <Button type="click" onClick={ ()=>setState({active:!state.active}) }>close</Button>
        </div>
        
        )
      }
      
     
     
   </>
 )


}