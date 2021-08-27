import styled from "styled-components"
import React from 'react'
import send from '../../assess/send.ico'


const CommentDiv = styled.div`
width: 50%;

display: flex;
flex-flow: column;
justify-content: space-between;



`
const CommentButtom = styled.button`


`

const CommentsScreen = styled.div`
background-color: grey;


`

const CommentWrite = styled.div`
width: 100%;
height: 2.2em;
border-radius: 10px;
border: 1px solid;
display: flex;
flex-direction: row;
`


const CommentTextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: none;
  
  
`

const CommentButtomSend = styled.button`
   background-image: ${`url(${send})`};
   background-repeat: no-repeat;
   background-color: white;
   width: 60px;
   border: none;

   &:hover{
       transform: scale(1.1);
   }
   
`

//todo: seguir contrsuyendo el form de mensajes


const comments = [
'hi this article its great','I love this article'
]

 export const CommentScreen = () => {

 console.log('hi hi');

return(

  <CommentDiv>
      <CommentButtom>comment</CommentButtom>
     <CommentsScreen>
       {comments.map(comment => (
           <p>{comment}</p>
       ))}
     </CommentsScreen>
      <CommentWrite>
        <CommentTextArea />
        <CommentButtomSend/>
       
      
      </CommentWrite>
  </CommentDiv>


)
 

}