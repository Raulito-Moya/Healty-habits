import styled from "styled-components"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import send from '../../assess/send.ico'
import menu from '../../assess/menu.svg'
import { ModalConfirmationDelete } from "../UX/ModalConfirmationDelete"
import { useComment } from "../../Hooks/useComment"
import { ModalSelectAction } from "../UX/ModalSelectAction"
import { useForm } from "react-hook-form";

const CommentDiv = styled.div`
width: 90%;

display: flex;
flex-flow: column;
position: relative;



`
const CommentButtom = styled.button`


`

const CommentsScreen = styled.div`
background-color: grey;
display: ${(props) => (props.displayed === true ? 'block' : 'none' )};

height: ${(props) => (props.displayed === true ? 'auto' : '20px' )};

transition: all 4.5s ease;


`
const CommentsDisplay = styled.div`
   padding-left: 2.1em;
   padding-top: 2.1em;
   padding-bottom: 1.9em;
   padding-right: 2.1em;
   background-color: azure;
   position: relative;
`

const Comment = styled.div`
  display: flex;
  flex-direction: row;
   background-color: bisque;
   border-radius: 1.5em;
   padding: 1.5em;
   margin-top: 2.5em;
   position: relative;

   & > button {
     width: 2.1em;
     height: 2.1em;
    
     
     top: 4.1em;
     right: 5px;
     background-image: ${`url(${menu})`};
     background-repeat: no-repeat;
     border: none;
     position: absolute;
     &:hover{
       transform: scale(1.1);
     }
   }
`




const CommentWrite = styled.form`
width: 100%;
height: 2.2em;
border-radius: 10px;
border: 1px solid;
display: flex;
flex-direction: row;


`


const CommentTextArea = styled.textarea`
  width: 95%;
  
  border-radius: 10px;
  border: none;
  font-size:1.5em;
  outline: none;
  resize:none;
  
   
  
  
`

const CommentButtomSend = styled.button`
   background-image: ${`url(${send})`};
   background-repeat: no-repeat;
   background-color: white;
   width: 5%;
   border: 1px solid;
   border-left: none;
   border-radius: 10px;
    justify-self: flex-end;
   &:hover{
       transform: scale(1.1);
   }
   
`
const LittleModal = styled.nav`
  background-color: aqua;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 5;
  top:${(props => `${props.positionNumber}px`)};
  right: 0;
  

`



const comments = [
'hi this article its great','I love this article', 'That its true a like this article '
]

 export const CommentScreen = () => {
  let select = document.getElementById('form')
 

 //todo:lo dejo aqui viendo el problema con el select
  
  console.log(select);
    const { displayed,modal,positionNumber,displayModal,diplayCommentScreen,modalConfirmation, displayModalconfirmation,onSubmit } =  useComment({select})
   console.log(positionNumber);
   console.log(modal);
   

   const { register, handleSubmit,watch, formState: { errors } }= useForm({
    mode: "onBlur",
   });





return(
  
  <CommentDiv>
    
      <CommentButtom  onClick={diplayCommentScreen}>comment</CommentButtom>
     {

       displayed  && 
      (

      <CommentsScreen displayed={displayed} >
         <CommentsDisplay >
          {
            comments.map((comment, i) => (
               <Comment key={i} id={i} >
                 <span>By Raul Admin:</span>
                  <p>{comment}</p>
                  <button type="click" id='diplayModal' onClick={()=>{displayModal(i)} }/> 
                </Comment>
            ))
          
          }
               {
                   modal && (<ModalSelectAction positionNumber = { positionNumber }  displayModalconfirmation = {displayModalconfirmation}/>)
               }
         </CommentsDisplay>
        

        <CommentWrite id="form" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
         
          <CommentTextArea placeholder="Type a comment here" />
          <CommentButtomSend onClick={()=> {console.log('hii')}}  />
       
        </CommentWrite>

        {
          modalConfirmation && <ModalConfirmationDelete displayModalconfirmation = {displayModalconfirmation} />
        }
        
      </CommentsScreen>
       
      )
    
    }
   
  </CommentDiv>


)
 

}