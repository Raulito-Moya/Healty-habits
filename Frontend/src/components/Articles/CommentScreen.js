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
import { updateComment } from "../../API/updateComment"
import { getCommentsByArticle } from "../../API/getCommentsByArticles"
import './comments.css'

const CommentDiv = styled.div`
width: 90%;

display: flex;
flex-flow: column;
position: relative;
padding-bottom: 2em;



`
const CommentButtom = styled.button`
  border: none;
  border-raduis: 50px;
  background-color: rgb(152, 236, 159);
  padding: 10px;
  font-family: 'Indie Flower', cursive;
  font-size: 1.2em;


  &:hover{
  transform: scale(1.1);
  

}

`

const CommentsScreen = styled.div`
background-color: grey;

height: ${(props) => (props.displayed === true ? 'auto' : '20px' )};

transition: all 4.5s ease;
border:none;
border-radius: 5px;

opacity: ${(props) => (props.displayed === true ? 2.0 : 0 )};
    visibility: ${(props) => (props.displayed === true ? 'visible' : 'hidden' )};
   transition: all 2.5s ease;

`
const CommentsDisplay = styled.div`

   padding-left: 2.1em;
   padding-top: 2.1em;
   padding-bottom: 1.9em;
   padding-right: 2.1em;
   background-color: azure;
   position: relative;
  
   height: auto;
  
   

   /*display:  ${(props) => (props.displayed === true ? 'block' : 'none' )};;*/
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

const CommentTextAreaUpdateComment = styled(CommentTextArea)`

 

`

const CommentButtomSend = styled.button`
   background-image: ${`url(${send})`};
   background-repeat: no-repeat;
   background-color: white;
   width: 60px;
   border: 1px solid;
   border-left: none;
   border-radius: 10px;
    justify-self: flex-end;
   &:hover{
       transform: scale(1.1);
   }
   
   @media screen and (max-width: 1000px){
    width: 30px;
   }
`




  


   const CommentWriteTextArea = ({onSubmit,register,handleSubmit}) =>{
      
     return( 
       
       <CommentWrite  id="form" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            
  
       <CommentTextArea   placeholder="Type a comment here"  name="textContent"  {...register("textContent",/* {required:true,pattern:/\S+$/,message:"should be 10 length"}*/)} />
       <CommentButtomSend id="button" type="submit"  />
       
     </CommentWrite>
     
     )
      
   }


  const CommentWriteTextAreaUpdateComment = ({cancelEditComment,comment,setCommentPosted,newCommentSearch}) => {
      const [value,setValue] =useState(comment.content)   
   
      let select = document.getElementById('formUpdate') 
      
      const handleInputChange = ({target}) => {
         
        setValue( target.value )
    
      }
 
    const onSubmit = async() => {
       const res = await updateComment(value,comment._id,select)
      


       res && setCommentPosted(!newCommentSearch)
       res && cancelEditComment() //close the commmentTexarea
       
    }

    return(
    <>
      <CommentWrite  id="formUpdate" enctype="multipart/form-data" >
           
 
       <CommentTextAreaUpdateComment   placeholder="Type a comment here"   onChange={handleInputChange}  value={value}  />
       <CommentButtomSend id="button" type="button" onClick={ value.length >= 1 && onSubmit } />
       <button type="click" onClick={cancelEditComment}>cancel</button>
     </CommentWrite>
    
    </>
    )

  } 
  
  const CommentInfo = ({comment,i,displayModal}) => {
    let userwriterid = localStorage.getItem('writerid')

   return(
     <>
        <span >By <b style={{ color:'green'}}>{comment.author}: </b></span>
        <p style={{ fontFamily:'Akaya Telivigala'}}>{comment.content}</p>
        
       {comment.writerid === userwriterid && (<button type="click" id='diplayModal' onClick={()=>{displayModal(i,comment._id)} }/>) }  
     </> 
    )
   }



export const CommentScreen = ({article}) => {
    const isLoaged = localStorage.getItem('userToken')
    const [newCommentSearch,setCommentPosted] = useState(false)
    const [comments, setComments] = useState(false)
    // const { newCommentSearch, setcommentPosted } = useStorage()
     let select = document.getElementById('form')
     //console.log(comments);

    //console.log(select);
      const { 
         displayed,
         modal,
         positionNumber,
         displayModal,
         diplayCommentScreen,
         modalConfirmationDelete, 
         displayModalconfirmationDelete,
         editComment,
         displayEditComment,
         cancelEditComment,
         deleteComment
         } =  useComment({select})
       
        

     const { register, handleSubmit,watch, formState: { errors } }= useForm({
      mode: "onBlur",
     });

     useEffect(()=>{
       select = document.getElementById('form')
       
         
      },[displayed]) 
   
      useEffect(async()=>{
        const res = await getCommentsByArticle(article._id)
        
       setComments(res)
       
       },[newCommentSearch])
    

     const onSubmit = async(data,e) => {
       // console.log(data);
      
        await postComment(article,select)
         e.target.reset()
       
        setCommentPosted(!newCommentSearch)
       // console.log(newCommentSearch);
     }

console.log(displayed);

  return(
  
     <CommentDiv >
       
         <CommentButtom  onClick={diplayCommentScreen}>comment</CommentButtom>
         
       
   
         <CommentsScreen displayed={displayed}>
           <CommentsDisplay >
      
      
             {

              comments.length >= 1  ? comments.map( (comment, i) => (
                   
                 <Comment key={i} id={i} >
                   
                    
                   { comment._id !== editComment && <CommentInfo comment = { comment } i = { i } displayModal = { displayModal } />} 
                   { comment._id === editComment && <CommentWriteTextAreaUpdateComment newCommentSearch={newCommentSearch} setCommentPosted={setCommentPosted}   cancelEditComment={cancelEditComment} comment={comment}/>}
                       
                      
                      
                 </Comment>
                      
                 )
              
              ) : <h1>Be the first in comment the article</h1>
             
             }
              {
                  modal && ( <ModalSelectAction positionNumber = { positionNumber }  displayModalconfirmationDelete = {displayModalconfirmationDelete} displayEditComment = {displayEditComment}/> )
              }


           </CommentsDisplay >
           
           {isLoaged &&  <CommentWriteTextArea register={register} onSubmit={onSubmit} handleSubmit={handleSubmit}/>} 
         
   
           {
             modalConfirmationDelete && <ModalConfirmationDelete newCommentSearch={newCommentSearch} 
                                                                 setCommentPosted={setCommentPosted }  
                                                                 displayModalconfirmationDelete = {displayModalconfirmationDelete} 
                                                                 commentID = {deleteComment}
                                          />
           }
           
         </CommentsScreen>
          
       
      
     </CommentDiv>
   

)
 

}