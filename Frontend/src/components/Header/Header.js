import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useHeader } from '../../Hooks/useHeader'
import hoja from '../../img/hojas.svg'
import open from '../../img/abierto.svg'
import close from '../../img/cerrar.svg'
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
  width: 100%;
  height: 80%;
  align-items: flex-start;
  align-items: center;
  z-index:999;
  background-color: aliceblue;
  border-radius: 10px;
 
  border-left: 1px solid #1111;

  position: fixed;
  top: 75px;
  right: ${(props) => (props.navisOpen === true ? "-70vw" : "-100vw")} ;
  
   
  @media screen and (max-width: 1600px){
    right: ${(props) => (props.navisOpen === true ? "-70vw" : "-100vw")};
   
   }


   @media screen and (max-width: 999px){
    right: ${(props) => (props.navisOpen === true ? "-20vw" : "-100vw")};
   
   }

   @media screen and (max-width: 500px){
    right: ${(props) => (props.navisOpen === true ? "-20vw" : "-120vw")};
    transition: all 1.5s ease;
   }
   transition: right 1.5s ease;
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
  width: 40vh;
  height: auto;

  flex-flow: column;
  align-items:center;
  justify-content:flex-start;
`

 export const ListItem = styled(Link)`
  text-decoration: none;
   margin-top: 70px;
   font-size: 2em;
  text-decoration-color: aliceblue;
   margin-top: 20px;
   
 
   &:hover{
    transform: scale(1.1);
  }
`

const SelectLinkTable = styled.ul`
   display: ${(props) => (props.openArticle === true ? 'flex' : 'none')};
   flex-flow: column;
   margin-left: 35px;
   transition: all 1.5s ease;
  & > :any-link{
     margin-left: 20px;
     color: greenyellow;
  }
`





const Header = () => {
   
 const isLoaged = localStorage.getItem('userToken')

 
const {NavisOpen,BottomText,openNav, GoArticles, openArticles} = useHeader()


 return(
    <StyledHeader >
      <IconDiv>
      <IconImg src={hoja}></IconImg>
      <StyledTitle>Healty Habits</StyledTitle>
       
      </IconDiv>
      
     <NavWrapper navisOpen ={NavisOpen} onBlur={openNav}>
       <ListNav>
       <ListItem  onClick={openArticles}>Articles</ListItem  >
         <SelectLinkTable openArticle = {GoArticles} >
            <ListItem  to='/articles/exercises'>Exercises </ListItem  >
            <ListItem to='/articles/healthyfood' >Healty Food </ListItem  >
         </SelectLinkTable >
         <ListItem  >Features </ListItem  >
         <ListItem  >Contact </ListItem  >
         <ListItem to="/login" > Login & SignUp </ListItem  >
       {isLoaged && <ListItem to="/articles/createarticle" > Create Article </ListItem  >}  
       </ListNav>
     </NavWrapper>
       
     <OpenModalButtom onClick={openNav}   bottomText ={BottomText} ></OpenModalButtom>
    </StyledHeader>
 )



}

export default Header
