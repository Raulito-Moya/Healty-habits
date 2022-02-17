import React, { Fragment, useEffect } from "react";
import { useStorage } from "../../context/useStorage";

import hoja from '../../img/hojas.svg'
import styled from "styled-components";
import { BackLinkbuttom } from "../Articles/ExerciseArticles";

import { Link } from "react-router-dom";
import useSignUpForm from "../../Hooks/useSignUpForm";
import { ErrorMessage } from "../Articles/CreateArticle";

const SignUpForm = styled.form`
     display: flex;
  position: relative;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background-color: aquamarine;
  border-radius: 10px;
  width: 50vw;
  height: auto;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  @media screen and (max-width: 999px) {
    width: 100%;
  }




   padding-bottom: 20px;
   padding-top: 30px;
`

export const SignImg = styled.img`
  width: 100px;
  padding-bottom: 50px;

  &:hover {
    transform: scale(1.1);
  }
`;


const SignUpImg = styled(SignImg)`
  
  margin-top:10px;
`




export const SignLabel = styled.label`
  font-weight: 800;
  font-size: 1.5em;
  & + input {
    margin-top: 10px;
    margin-bottom: 15px;
  }
`;

export const SignInput = styled.input`
  border-radius: 5px;
  width: 40%;
  height: 30px;
  border: none;

  @media screen and (max-width: 650px) {
    width: 90%;
  }

  &:focus {
    transform: scale(1.1);
    box-shadow: ${(props) => props.theme.lightBoxShadow};
  }
`;

export const ChangeSignWay = styled(Link)`
  font-size: 1.3em;
  padding: 15px;
`;

 export const BackBottom = styled.button`
    position: absolute;
    top: 7px;
    left: 2px;
   
    border:none;
    font-size: 1.2em;
    border-radius: 5px;
    padding-left: 1.2em;
    padding-right: 1.2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  

`

export const SignButtom = styled.button`
   
    border:none;
    font-size: 1.2em;
    border-radius: 5px;
    padding-left: 1.2em;
    padding-right: 1.2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    &:hover{
      background-color:'aquamarine';
    }


`





const SignInputName = ({register,errors}) => {

  return(
    <Fragment>
       <SignLabel>Nombre:</SignLabel>
        <SignInput name='name' autoComplete="off"    {...register('name',{ 
                                   required:true, 
                                   pattern:{  value:/^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,message:"*Name no valid"}
                                   })} />
      {errors.name && <ErrorMessage>Pease type a correct name</ErrorMessage>}  
    </Fragment>

  )
}


 export const SignInputEmail = ({register,errors}) => {
  
  return(
    <Fragment>
       <SignLabel>email:</SignLabel>
        <SignInput name='email' autoComplete="off"    {...register('email',{ 
                                   required:true, 
                                   pattern:{  value:/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,message:"*Email no valid"}
                                   })} />
      {errors.email && <ErrorMessage>Pease type a correct email</ErrorMessage>}  
    </Fragment>

  )
}


export const SignInputPassword = ({register,errors}) => {
  
  return(
    <Fragment>
       <SignLabel>password:</SignLabel>
        <SignInput name='password' type="password"  autoComplete="off"   {...register('password',{ 
                                   required:true, 
                                   minLength: {
                                    value: 5,message:"*Password no valid"
                                  }
                                   })} />
      {errors.password && <ErrorMessage>Pease type a correct password</ErrorMessage>}  
    </Fragment>

  )
}

export const SignInputConfirmPassword = ({register,errors}) => {
  
  return(
    <Fragment>
       <SignLabel>Confirm password:</SignLabel>
        <SignInput name='confirmPassword' type="password"  autoComplete="off"    {...register('confirmPassword',{ 
                                   required:true, 
                                    minLength: {
                                    value: 5,message:"*Email no valid"}
                                  } )} />
      {errors.password && <ErrorMessage>Pease type the same  password</ErrorMessage>}  
    </Fragment>

  )
}


export  const SignUpScreen = ({history}) => {
   
  const {register, handleSubmit,onSubmit,errors,errorLogin} = useSignUpForm(history)
   console.log(history);


    const {changePath,setChangePath} = useStorage()
    console.log(changePath);
    
    useEffect(()=> {
  
      setChangePath(true)
    return ()=>{ setChangePath(false) }
    },[])
    
 
  return(
    <SignUpForm onSubmit={handleSubmit(onSubmit) }>
        <BackBottom
        type='button'
        onClick={() => {
          history.push('/');
        }}
        >
         Back
        </BackBottom>
        <SignUpImg src={hoja}/>
         <SignInputName register={register} errors={errors}/>
         <SignInputEmail register={register} errors={errors}/>
         <SignInputPassword register={register} errors={errors}/>
          <SignInputConfirmPassword register={register} errors={errors}/>
        <SignButtom type="submit" >Send</SignButtom>
       <ChangeSignWay to='/login'>Sign In</ChangeSignWay>
       {errorLogin && <h4>{errorLogin}</h4>}
    </SignUpForm >
  
  )
  
  }