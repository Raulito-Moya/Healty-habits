import { useState } from "react"



 export const useComment = () => {

    const [displayed,setdiplayed] = useState(false);
    const [modal,setModal] = useState(false);
    const [positionNumber,setPositionNumber] = useState(null);
    const [modalConfirmation, setModalConfirmation] = useState(false)

    const diplayCommentScreen = (e) => {
        console.log(e.target);
       setdiplayed(!displayed)
       
       modal && setModal(!modal)
     }


    const displayModal = (i) => {
        setModal(!modal)
          
        const ele = document.getElementById("diplayModal")
        const comment = document.getElementById(`${i}`)
         
    
          
        setPositionNumber(comment.offsetTop + ele.offsetTop + 35)
      }
   
    const displayModalconfirmation =() => {
      setModalConfirmation(!modalConfirmation);


     modal && setModal(!modal)
     console.log(modalConfirmation);

    }


 return{ displayed,setdiplayed,modal,setModal, displayModal,diplayCommentScreen,positionNumber,modalConfirmation, displayModalconfirmation }

}