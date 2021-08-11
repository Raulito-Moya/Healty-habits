import React from 'react'
import Loader from "react-loader-spinner";
import styled from 'styled-components';
import { LoaderSpinner } from './LoaderSpiner';

 const LoadingPage = ({isLoading}) => {

  const Page = styled.div`
  
    flex-direction:column;
    display: flex ;
    justify-content:center;
    align-items:center;
    top:70;
    bottom:0;
    left:0;
    right:0;
    z-index:2000;
    background: #fff;

    `

 return(
   
  

 <Page>
  <LoaderSpinner
  data-testid='loadingSpinner'
  />
 </Page>
 )

}

export default LoadingPage