import styled from "styled-components"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import send from '../../assess/send.ico'
import menu from '../../assess/menu.svg'
import { ModalConfirmationDelete } from "../UX/ModalConfirmationDelete"
import { useComment } from "../../Hooks/useComment"
import { ModalSelectAction } from "../UX/ModalSelectAction"
import { useForm } from "react-hook-form";
import { postComment } from "../../API/postComment"
import { useStorage } from "../../context/useStorage"

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



   const commentsMock = [
   'hi this article its great','I love this article', 'That its true a like this article '
   ]

export const CommentScreen = ({article}) => {
  const { comments, setComments, newCommentSearch, setcommentPosted} = useStorage()
   const userwriterid = localStorage.getItem('writerid')
   let select = document.getElementById('form')
    
  //console.log(select);
    const { 
      displayed,
      modal,
      positionNumber,
      displayModal,
      diplayCommentScreen,
      modalConfirmation, 
      displayModalconfirmation,
     
       } =  useComment({select})

      

   const { register, handleSubmit,watch, formState: { errors } }= useForm({
    mode: "onBlur",
   });

   useEffect(()=>{
     select = document.getElementById('form')
     
      
    },[displayed]) 
  
    useEffect(()=>{
     setComments(article._id)
     
    },[newCommentSearch])
  

   const onSubmit = async(data,e) => {
    console.log(data);
  
    await postComment(article,select)
     e.target.reset()
   
    setcommentPosted(!newCommentSearch)
   }

return(
  
  <CommentDiv >
    
      <CommentButtom  onClick={diplayCommentScreen}>comment</CommentButtom>
     {

       displayed  && 
      (

      <CommentsScreen displayed={displayed} >
         <CommentsDisplay >
          {
           comments ? comments.map((comment, i) => (
               <Comment key={i} id={i} >
                 <span>By {comment.author}</span>
                  <p>{comment.content}</p>
               {comment.writerid === userwriterid && (<button type="click" id='diplayModal' onClick={()=>{displayModal(i)} }/>) }   
                </Comment>
            )) : <h1>Be the first in comment the article</h1>
          
          }
               {
                   modal && (<ModalSelectAction positionNumber = { positionNumber }  displayModalconfirmation = {displayModalconfirmation}/>)
               }
         </CommentsDisplay>
        

        <CommentWrite  id="form" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
         

          <CommentTextArea   placeholder="Type a comment here" name="textContent"  {...register("textContent",/* {required:true,pattern:/\S+$/,message:"should be 10 length"}*/)} />
          <CommentButtomSend id="button" type="submit"  />
       
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