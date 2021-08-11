import React, { useEffect } from "react";
import { useStorage } from "../../context/useStorage";
import { BackBottom, ChangeSignWay, SignForm,  SignImg, SignInput, SignLabel } from "./LoginScreen";
import hoja from '../../img/hojas.svg'
import styled from "styled-components";
import { BackLinkbuttom } from "../Articles/ExerciseArticles";

const SignUpForm = styled(SignForm)`
   padding-bottom: 20px;
   padding-top: 30px;
`

const SignUpImg = styled(SignImg)`
  
  margin-top:10px;
`


export  const SignUpScreen = ({history}) => {
   
    const {changePath,setChangePath} = useStorage()
    console.log(changePath);
    
    useEffect(()=> {
  
      setChangePath(true)
    return ()=>{ setChangePath(false) }
    },[])
    
  
  return(
    <SignUpForm >
        <BackBottom
        type='button'
        onClick={() => {
          history.goBack();
        }}
        >
         Back
        </BackBottom>
        <SignUpImg src={hoja}/>
        <SignLabel>Nombre:</SignLabel>
        <SignInput/>
       <SignLabel>Email:</SignLabel>
        <SignInput/>
        <SignLabel>Password:</SignLabel>
        <SignInput/>
        <SignLabel>Confirm Password:</SignLabel>
        <SignInput/>
       <ChangeSignWay to='/login'>Sign In</ChangeSignWay>
    </SignUpForm >
  
  )
  
  }