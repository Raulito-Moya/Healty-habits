import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useHeader } from '../../Hooks/useHeader'
import hoja from '../../img/hojas.svg'
import open from '../../img/abierto.svg'
import close from '../../img/cerrar.svg'
import exercise from '../../img/exercise.png'
import article from '../../img/article.png'
import contact from '../../img/contact.png'
import login from '../../img/login.png'
import appContext from '../../context/app-context'
import { useStorage } from '../../context/useStorage'



const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 69px;
  top: 0;
  box-sizing: border-box;
  border: none;
  border-radius:10px;
  margin-left: -10px;
  padding: 0px 10px ;
  z-index: 999;
  background-color: ${props => props.theme.lightGreen};
  display:flex;
   justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #1111;
`

const IconDiv = styled.div`
   display: flex;
   flex-flow: row;
   justify-content: flex-start;
 

`

const StyledTitle = styled.h1`
   font-family: 'Indie Flower', cursive;
   font-size: 1.5em;
   padding-top: 10px;
   padding-left:10px ;
`
const IconImg = styled.img`
  width: 60px;
transition:all 0.3s ease;

&:hover{
  transform: scale(1.1);

}

`


const NavWrapper = styled.nav`
 
  display: flex;

  width: 80%;
  height: 90px;
  align-items: flex-start;
  align-items: center;
  z-index:800;
  background-color: aliceblue;
  border-radius: 10px;
 
  border-left: 1px solid #1111;

  position: fixed;
   left:4vw; 
   top: ${(props) => (props.navisOpen === true ? "7vw" : "-70vw")} ;
   
   
  /* @media screen and (max-width: 1600px){
    right: ${(props) => (props.navisOpen === true ? "-70vw" : "-100vw")};
   
   } */


   @media screen and (max-width: 999px){
    top: ${(props) => (props.navisOpen === true ? "80px" : "-100px")} ;
   }

   @media screen and (max-width: 500px){
    top: ${(props) => (props.navisOpen === true ? "20vw" : "-70vw")} ;
    
    transition: all 1.5s ease;
   }
   transition: top 1.5s ease;
`

const OpenModalButtom = styled.button`
 width: 60px;
 height: 40px;

 border: none;
 
 margin-right: 20px;
 &:hover{
  transform: scale(1.1);

  }
 background-color: ${props => props.theme.lightGreen};
 background-image: ${(props)=> (props.bottomText === 'open' ? `url(${open})`: `url(${close})` )};
 background-repeat: no-repeat;
`

const ListNav = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  height: auto;
  align-items:center;
  justify-content:space-between;
`

 export const ListItem = styled(Link)`
  text-decoration: none;
   margin-top: 70px;
   font-size: 20px;
   color:black;
   margin-top: 20px;
   display:flex ;
  

   &:hover{
    transform: scale(1.1);
  }
`

const SelectLinkTable = styled.ul`
   display: ${(props) => (props.openItem === true ? 'flex' : 'none')};
   position:absolute ;
   top:60px;
   left: 55px;
   background-color:aliceblue ;
   flex-flow: column;
   width:auto ;
   padding:0px ;
   transition: all 1.5s ease;
     & > :any-link{
        margin-left: 20px;
        color: black;
        
     }
`

const SelectLinkTableLogin = styled(SelectLinkTable)`
  display: ${(props) => (props.openLogin === true ? 'flex' : 'none')};
  left: 295px;
`





const Header = () => {
   
 const isLoaged = localStorage.getItem('userToken')

 
const {NavisOpen,BottomText,openNav, GoArticles, openItem,GoLogin} = useHeader()


 return(
    <StyledHeader >
      <IconDiv>
      <IconImg src={hoja}></IconImg>
      <StyledTitle>Synergy Habits</StyledTitle>
       
      </IconDiv>
      
     <NavWrapper navisOpen ={NavisOpen} onBlur={openNav}>
       <ListNav>
       <ListItem  onClick={()=> {openItem('article')}}> <img src={exercise} alt=""/> <h4>Section</h4></ListItem  >
         <SelectLinkTable openItem = {GoArticles} >
            <ListItem  to='/articles/exercises'>Exercises </ListItem  >
            <ListItem to='/articles/healthyfood' >Eat Well!! </ListItem  >
         </SelectLinkTable >
         <ListItem   onClick={ ()=> {openItem('login')} }> <img src={login} alt=""/> <h4>Register</h4></ListItem  >
          <SelectLinkTableLogin openLogin = {GoLogin} >
             <ListItem  to='/articles/exercises'>Login </ListItem  >
             <ListItem to='/articles/healthyfood' >Register </ListItem  >
          </SelectLinkTableLogin >
       {isLoaged && <ListItem to="/articles/createarticle" > Create Article </ListItem  >}  
       </ListNav>
     </NavWrapper>
       
     <OpenModalButtom onClick={openNav}   bottomText ={BottomText} ></OpenModalButtom>
    </StyledHeader>
 )



}

export default Header
