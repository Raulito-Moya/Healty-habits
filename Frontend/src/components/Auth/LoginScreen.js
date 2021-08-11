import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStorage } from "../../context/useStorage";
import hoja from "../../img/hojas.svg";


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

export const SignImg = styled.img`
  width: 100px;
  padding-bottom: 50px;

  &:hover {
    transform: scale(1.1);
  }
`;

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
`;

 export const BackBottom = styled.button`
    position: absolute;
    top: 7px;
    left: 2px;
  

`


export const LoginScreen = ({ history }) => {
  const { changePath, setChangePath } = useStorage();

  useEffect(() => {
    setChangePath(true);
    return () => {
      setChangePath(false);
    };
  }, []);

  return (
    
        
 
    <SignForm>
     <BackBottom
     type='button'
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </BackBottom>
      <SignImg src={hoja} />
      <SignLabel>Email:</SignLabel>
      <SignInput />
      <SignLabel>Password:</SignLabel>
      <SignInput />
      <ChangeSignWay to="/signup">Do you nedd an acount?</ChangeSignWay>
    </SignForm>  
  
  );
};
