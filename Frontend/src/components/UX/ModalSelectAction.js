import styled from "styled-components"
import trash from '../../assess/trash.svg'
import cancel from '../../assess/cancel.svg'
import edit from '../../assess/edit.svg'
import { useComment } from "../../Hooks/useComment"


 export const ModalSelectAction = ({positionNumber, displayModalconfirmationDelete, displayEditComment}) => {


    const LittleModal = styled.nav`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
     
    background-color: grey;
    border-radius: 30px;
    padding: 1.4em;
    width: 6.1em;
   
    position: absolute;
    z-index: 2;
    top:${(props => `${props.positionNumber}px`)};
    right: 1.8em;
    
  
  `


const ButtonDelete = styled.button`
   background-image: ${`url(${trash})`};
   background-repeat: no-repeat;
  background-size: 2.6em;
   height: 2.1em;
   width: 2.1em;
   
   border: none;
   border-radius: 0.2em;
   padding: 1.2em;
   &:hover {
        transform: scale(1.1);
    }
  `

  const ButtonEdit = styled.button`
   background-image: ${`url(${edit})`}; 
   background-repeat: no-repeat;
   height: 2.1em;
   width: 2.1em;
   border: none;
   border-radius: 0.2em;
   padding: 1.2em;
   
    &:hover {
        transform: scale(1.1);
    }
  `
   


  return(
      <LittleModal positionNumber={positionNumber}>
         <ButtonDelete onClick={() => displayModalconfirmationDelete()}/>
         <ButtonEdit onClick={()=> displayEditComment()} />
      
      </LittleModal>
  )



}