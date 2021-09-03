import styled from "styled-components"
import cancel from '../../assess/cancel.svg'
import confirm from '../../assess/confirm.svg'
import no_confirm from '../../assess/no.svg'

import { useState } from "react"
import { deleteComment } from "../../API/deleteComment"
import { useStorage } from "../../context/useStorage"


export const ModalConfirmationDelete = ({displayModalconfirmationDelete,commentID}) => {
   

   const Menu = styled.div`
   position: absolute;
      display:flex ;
      flex-direction: column;
      top: 20%;
      width: 80vw;
     height: 20vh;
    
     opacity: 0.9;
     
     align-items: center;
     justify-items: center;
     justify-content: center;
     align-self: center;

     background-color: whitesmoke;
     border-radius: 20px;
     z-index: 3;
      



     & > button {
         width: 2.1em;
         height: 2.1em;
        position: absolute;
        right: 0px;
        top: 0px;
          justify-self: flex-end;
         background-image: ${`url(${cancel})`}; 
         background-repeat: no-repeat;
       
         &:hover{
             transform: scale(1.1);
         }
     }

     
     & > .select {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
      width: 4.1em;
     }


     & > .edit{
        display: inline-flex;
        padding: 2.0em;

       
     } 

     & > .delete{
        display: inline-flex;
       
 
    
     } 
   
   `

  


  const ConfirmDelete = styled.button`
   background-image: ${`url(${confirm})`};
   background-repeat: no-repeat;
   height: 2.1em;
   width: 2.1em;
    border:none;
   &:hover {
        transform: scale(1.1);
    }
  `
  const NoConfirm = styled.button`
   background-image: ${`url(${no_confirm})`}; 
   background-repeat: no-repeat;
   background-size: 2.3em;
   background-position: center;
   height: 2.1em;
   width: 2.1em;
   border:none;
   
   
    &:hover {
        transform: scale(1.1);
    }
  `


  const {  newCommentSearch, setcommentPosted} = useStorage() 
  
   console.log(commentID);
    
   const onsubmit = async() => {
     const res = await deleteComment(commentID)
     
     displayModalconfirmationDelete()
     setcommentPosted(!newCommentSearch)

   }


  return(
      
       <Menu>
           <button type="click" onClick = { displayModalconfirmationDelete } />
           <h4>Are you sure do you want delete this comment</h4>

           <div className="select">
               <div className="edit">
                <ConfirmDelete onClick={onsubmit}/> <p>Yes  </p>
               </div>
            <div className="delete">
             <NoConfirm onClick = { displayModalconfirmationDelete } /> <p>No</p>
            </div>
           </div>
         
        
       </Menu>
      

  )


}