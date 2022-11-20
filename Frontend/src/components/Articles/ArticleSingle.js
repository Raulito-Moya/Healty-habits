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
import { useStorage } from '../../context/useStorage';
import { BackLinkbuttom } from './ExerciseArticles';



export const ArticleViewPreview = styled.div`
   align-items: center;
 
   display: flex;
   flex-flow: column;
   margin-top: 80px;
   width: 80%;
   z-index:1;
   @media screen and (max-width:500px){
    width: 100%;
   }  
  
  

`


export const ArticleView = styled.div`

  align-items: center;
  box-shadow: 5px 5px 20px rgb(146, 146, 145);
  display: flex;
  flex-flow: column;
  border-radius: 25px;
   
`

export const ArticleTitle = styled.h1`
   font-family: 'Indie Flower', cursive;
   width: 100%;
   text-align: center;
   font-size: 3.1em;
  @media screen and (max-width:658px){
    text-align:center;
    font-size: 2.1em;
   }  

`

export const ArticleImg = styled.img`
  border-radius: 30px;
  
  width: 80%;
  padding: 1.2em;
  
  @media screen and (max-width:750px){
    width: 95%;
   }  

`
export const ArticleAuthor = styled.span`
  font-size: 1.3em;
  
  align-self: flex-end;
  padding: 50px;

  & > strong {
    color: green;
    font-size: 1.5em;
  }
`
export const DivTags = styled.div`
  display: flex;
  flex-flow: row;

`

export const Tag = styled.a`
 color: green;
 
 font-size: 1.9em;
 
 margin-left: 5px;

`

export const Articledescription = styled.p`
  color: black;
  font-family: 'Indie Flower', cursive;
  
  font-size: 1.7em;
   
 
  letter-spacing: 4px;
  
  width: 95%;
  
  line-height: 1.5em;
  height: 1em;
  overflow: hidden;


`

export const LikeDiv = styled.div`
   width: auto;
   display: flex;
   flex-flow: row;
   justify-content: space-between;
  
  
` 


export const LikeButton = styled.button`
 width: 100px;
 height: 40px;
 
 margin-left:0px ;
 border: none;
 background: center url(${likeIcon}) no-repeat;
 &:hover{
  transform: scale(1.1);

}

`

export const Likes = styled.span`
  font-family: sans-serif, cursive;
  align-self: flex-start;
  margin-left: -21px;
  margin-top: 20px;
 
 @media screen and (max-width:450px){
  
  margin-left: -8px;
  margin-top: 20px;

 }

` 

 export const LikesText = styled.p`
 margin-left: 20px;
 font-size: 1.2em;
 font-family: 'Akaya Telivigala',sans-serif;

`




 export const ArticleSingle = ({article, key}) => {

   const [show,setShow] = useState(false)
   const elementref =  useRef() 
   const {likes,setLikes,thanks, addLike} = useArtcicle()
   const userToken = localStorage.getItem('userToken')
  
   const [articleid,setarticleid] = useState(false)
   
    const {selectedArticle,selectArticle} = useStorage()
   
    console.log('here')

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
 


 
  const queryString = window.location.href;
  const urlParams = queryString.substring(queryString.lastIndexOf('/') + 1);

  console.log('params',urlParams)
    
  let htmlreg = new RegExp(/(<([^>]+)>)/i)
   console.log('regexp',htmlreg.test('<h1>hello word</h1>'))

   
   let ConvertStringToHTML = function (str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    console.log(doc.body.button)
    return doc.body;
 };
  
   console.log(ConvertStringToHTML('<h1>Hello Word</h1><h2>  IN this article ....</h2><p><br></p><h1><strong>We willl be talking about ...</strong></h1>')) 

   return(
    
    <ArticleViewPreview ref={elementref} key={key} >
    
   { 
    
    show ?  
    <ArticleView  key={key}>
     { selectedArticle && ( <BackLinkbuttom to="/articles" onClick={()=>{ selectArticle(false) }}>Back</BackLinkbuttom>) } 
      <ArticleTitle  dangerouslySetInnerHTML={{ __html: article.title }}></ArticleTitle>
      <ArticleImg src={article.img}/>
     
       <DivTags>
           { 
             article.tags.map(tag => (
               
                <Tag  dangerouslySetInnerHTML={{ __html: tag }}></Tag>
             ))
           }
          
       </DivTags>
       <p className={!selectedArticle ?  'hideContent' : 'showContent'} dangerouslySetInnerHTML={{ __html:article.content}}>
          
       </p>
      
       
       
       {
          !selectedArticle && ( <button type="" onClick={()=>{ selectArticle(article._id);   }}>more....</button>  ) 
           
          
        } 
       <ArticleAuthor  > By <strong dangerouslySetInnerHTML={{ __html:article.author}}></strong> </ArticleAuthor>
       
         <LikeDiv>
           <LikeButton type='button' onClick={() => { userToken ?  addLike(article) : alert('please register your account for give us a like')}} /> 
           <Likes likes={Likes}> {likes} </Likes >
         <LikesText> {thanks} </LikesText>
         </LikeDiv>

      <CommentScreen article={article}/>
       
    </ArticleView>
         : <MyLoader/>
  }

    </ArticleViewPreview>
    
   
  )
  }

