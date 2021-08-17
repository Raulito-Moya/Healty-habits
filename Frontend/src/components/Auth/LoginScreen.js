import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStorage } from "../../context/useStorage";
import useLoginForm from "../../Hooks/useLoginForm";
import hoja from "../../img/hojas.svg";
import { ErrorMessage } from "../Articles/CreateArticle";
import { BackBottom, ChangeSignWay,  SignImg, SignInput, SignInputEmail, SignInputPassword, SignLabel } from './SignUpScreen'

export const SignForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  background-color: aquamarine;
  border-radius: 10px;
  width: 50vw;
  height: 500px;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  @media screen and (max-width: 999px) {
    width: 100%;
  }
`;



export const LoginScreen = ({ history }) => {
  const { changePath, setChangePath } = useStorage();
   
   const {register, handleSubmit,onSubmit,errors} = useLoginForm(history)


  useEffect(() => {
    setChangePath(true);
    return () => {
      setChangePath(false);
    };
  }, []);

  return (
    
    <SignForm  onSubmit={handleSubmit(onSubmit) } errors={errors}>
     <BackBottom
     type='button'
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </BackBottom>
      <SignImg src={hoja} />
      <SignInputEmail name="email" register={register} errors={errors}/>
       <SignInputPassword name="email" register={register} errors={errors}/>
       <ChangeSignWay to="/forgotpassword">Forgot your password</ChangeSignWay >
       <button type="submit">enviar</button>
      <ChangeSignWay to="/signup">Do you need an acount?</ChangeSignWay>
    </SignForm>  
  
  );
};
