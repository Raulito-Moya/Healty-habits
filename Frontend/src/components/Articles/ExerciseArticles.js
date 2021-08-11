import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStorage } from "../../context/useStorage";
import { useArtcicle } from "../../Hooks/useArticle";
import { ArticlesRun } from "./Articles";
import { ArticleSingle } from "./ArticleSingle";

export const BackLinkbuttom = styled(Link)`
  position: fixed;
  width: 50px;
  height: 40px;
  margin: 0;
  left: -50px;
  border-radius: 5px;
  background-color: aqua;
  background-position: center;
  text-align: center;

  transition-property: all;
  transition-duration: 2.5s;
  transition-timing-function: ease;
  transition-delay: 2s;
  transform: translate(50px);
`;

const ExercisesArticles = () => {
  const { getExercisesArticles } = useArtcicle();

  let articles = getExercisesArticles();

  return (
    <div>
      <BackLinkbuttom to="/">Atras</BackLinkbuttom>

      <ArticlesRun>
        {typeof articles ? (
          articles.map((article) => (
            <ArticleSingle key={article.id} article={article} />
          ))
        ) : (
          <h1>Lo sentimos no hay nada</h1>
        )}
      </ArticlesRun>
    </div>
  );
};

export default ExercisesArticles;
