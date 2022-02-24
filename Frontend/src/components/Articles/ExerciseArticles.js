import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getActiveArticles from "../../API/getActiveArticles";
import { useStorage } from "../../context/useStorage";
import { useArtcicle } from "../../Hooks/useArticle";
import { ArticlesRun } from "./Articles";
import { ArticleSingle } from "./ArticleSingle";

export const BackLinkbuttom = styled(Link)`
  position: fixed;
  
  width: 80px;
  height: 40px;
  top: 70px;
  margin: 0;
  left: -80px;
 
  border-radius: 5px;
  background-color: aqua;
  background-position: center;
  text-align: center;

  transform: translate(86px);
  transition: all 2.5s ease;
  z-index: 900;
`;

const ExercisesArticles = () => {
   
   const {articlesStorage, setArticles} = useStorage()
   //console.log(articlesStorage);

const { getExercisesArticles } =  useArtcicle(articlesStorage);

 
   
   useEffect(()=>{
   setArticles()


   },[])

  let articles =  getExercisesArticles();
 


  return (
    <div>
      <BackLinkbuttom to="/">Back</BackLinkbuttom>

      <ArticlesRun>
        { articles ? (
          articles.map((article) => (
            <ArticleSingle key={article.id} article={article} />
          ))
        ) : (
          <h1>Error no Exercies articles founded</h1>
        )}
      </ArticlesRun>
    </div>
  );
};

export default ExercisesArticles;
