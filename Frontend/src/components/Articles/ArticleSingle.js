import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { articles } from "../../assess/mock"
import likeIcon from "../../assess/like-icon.svg"
import hoja from '../../img/hojas.svg'
import { useArtcicle } from '../../Hooks/useArticle';
import MyLoader from '../UX/Loader';
import { getLikesByArticles } from '../../API/getLikesByArticle';
import { CommentScreen } from './CommentScreen';
import { ModalEditComment } from '../UX/ModalConfirmationDelete';



const ArticleViewPreview = styled.div`
  align-items: center;
 
   border: 1px solid #1111;
   display: flex;
   flex-flow: column;
   margin-top: 80px;
   width: 80%;
   z-index:1;
   @media screen and (max-width:500px){
    width: 100%;
   }  

`


const ArticleView = styled.div`
  align-items: center;
 
  display: flex;
  flex-flow: column;
 
  
`

const ArticleTitle = styled.h1`
   font-family: Calibri, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 100%;
   text-align: center;
   font-size: 3.1em;
  @media screen and (max-width:658px){
    text-align:center;
    font-size: 2.1em;
   }  

`

const ArticleImg = styled.img`
  width: 80%;
  padding: 1.2em;
  
  @media screen and (max-width:750px){
    width: 95%;
   }  

`
const ArticleAuthor = styled.span`
  font-size: 1.3em;
  
  align-self: flex-end;
  padding: 50px;
`
const DivTags = styled.div`
  display: flex;
  flex-flow: row;

`

const Tag = styled.a`
 color: black;
 
 font-size: 1.9em;
 
 margin-left: 5px;

`

const Articledescription = styled.p`
  color: black;
  
  font-family: Verona, Geneva, Tahoma, sans-serif;
  font-size: 1.7em;
   
  letter-spacing: 1px;
  
  
  width: 95%;
  
  line-height: 1.5em;
  


`

const LikeDiv = styled.div`
   width: auto;
   display: flex;
   flex-flow: row;
   justify-content: space-between;
  
` 


const LikeButton = styled.button`
 width: 100px;
 height: 40px;
 
 margin-left:0px ;
 border: none;
 background: center url(${likeIcon}) no-repeat;
 &:hover{
  transform: scale(1.1);

}

`

const Likes = styled.span`
  align-self: flex-start;
  margin-left: -21px;
  margin-top: 20px;
 
 @media screen and (max-width:450px){
  
  margin-left: -8px;
  margin-top: 20px;

 }

` 

const LikesText = styled.p`
 margin-left: 20px;
 font-size: 1.2em;
 font-family: 'Lucida Sans Unicode', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`




 export const ArticleSingle = ({article, key}) => {

   const [show,setShow] = useState(false)
   const elementref =  useRef() 
   const {likes,setLikes,thanks, addLike} = useArtcicle()
   const userToken = localStorage.getItem('userToken')

   useEffect(()=> {
     
     const onChange = (entries) => {
      
       const el = entries[0] 
      //  console.log(entries[0])
       if(el.isIntersecting){
 
        setTimeout(()=> {setShow(true)},500)
       }
     }
 
      const observer = new IntersectionObserver(onChange, {
        rootMargin: '10px'
      })
   
    observer.observe(elementref.current)
   })
 

   useEffect(async()=> {
     
     const likesFound = await getLikesByArticles(article)
     setLikes(likesFound)
     console.log(likesFound);

   },[likes])


   return(
   
    <ArticleViewPreview ref={elementref} key={key}>
   
   { 
    
    show ?  
    <ArticleView  key={key}>
     
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleImg src={article.img}/>
      
       <DivTags>
           { 
             article.tags.map(tag => (
               
                <Tag>{tag}</Tag>
             ))
           }
          
       </DivTags>
       <Articledescription>{article.content}</Articledescription>
       <ArticleAuthor> Por {article.author} </ArticleAuthor>
       
         <LikeDiv>
           <LikeButton type='button' onClick={() => { userToken && addLike(article)}} /> 
           <Likes likes={Likes}> {likes} </Likes >
         <LikesText> {thanks} </LikesText>
         </LikeDiv>

      <CommentScreen/>
       
    </ArticleView>
         : <MyLoader/>
  }

    </ArticleViewPreview>
    
   
  )
  }

