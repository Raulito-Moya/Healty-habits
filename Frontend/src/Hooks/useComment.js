import { useState } from "react"


 export const useComment = ({select}) => {
   
    const [displayed,setdiplayed] = useState(false);
    const [modal,setModal] = useState(false);
    const [positionNumber,setPositionNumber] = useState(null);

    const [modalConfirmationDelete, setModalConfirmationDelete] = useState(false)
    const [editComment, setEditComment] = useState(false)
    const [deleteComment,setDeleteComment] = useState(false)
    //const [CommentID, setCommentID] = useState(false)
   

    const diplayCommentScreen = (e) => {
        
       setdiplayed(!displayed)
       
       modal && setModal(!modal)
     }


    const displayModal = (i,commentID) => {
        setModal(!modal)
          
        const ele = document.getElementById("diplayModal")
        const comment = document.getElementById(`${i}`)
         
        
         localStorage.setItem('editcommentvalue',commentID)
         
        setPositionNumber(comment.offsetTop + ele.offsetTop + 35) //the postion for the ModalSelection
      }
   
      
    const displayModalconfirmationDelete =() => {
      let commentID = localStorage.getItem('editcommentvalue')
      setDeleteComment(commentID)
      


      setModalConfirmationDelete(!modalConfirmationDelete);

      modal && setModal(!modal)
    

    }

   const displayEditComment = () => {
    let commentID = localStorage.getItem('editcommentvalue')

    setEditComment(commentID)

    modal && setModal(!modal)
   } 


   const cancelEditComment = () => {

     setEditComment(false)

   }




 return { 
         displayed,
         setdiplayed,
         modal,
         setModal, 
         displayModal,
         diplayCommentScreen,
         positionNumber,
         modalConfirmationDelete, 
         displayModalconfirmationDelete, 
         editComment,
         displayEditComment,
         cancelEditComment,
         deleteComment
        }

}