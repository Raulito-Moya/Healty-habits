import react, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import postNewArticle from '../../API/postNewArticle'
import useCreateArticle from '../../Hooks/useCreateArticle'
import { useForm } from 'react-hook-form'
import { LoaderSpinner } from '../UX/LoaderSpiner'
import { Quill } from '../ReactQuill/Quill'
import ReactQuill from 'react-quill'



const CreateArticleForm = styled.form`
  display: grid;
  grid-template-columns: auto auto auto 20vw ;
  
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  margin-top: 100px;

 
  border-radius: 20px;
   & > h1 {
      text-align: center;
     grid-row: 1;
     grid-column-start: 2;
     grid-column-end: 4;
     font-size: 3.1em;
   }
   
    & > .item1 {
      
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row:2;

      & > textarea {
         border-color: ${(props) => (props.errors.title &&  props.theme.lightBlue ) }
      }
     
     
    }
  
 

    & > .item2 {
      height: 300px;
   
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row: 3;

      & > textarea {
         border-color: ${(props) => (props.errors.content &&  props.theme.lightBlue ) }
      }
      
    }
   
    & > .item3 {
      
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 6;
      
      & > input {
         border-color: ${(props) => (props.errors.image &&  'red' ) }
      }
     
    }
   
    & > .item4 {
       grid-row: 4;
      
      grid-column-start: 1;
      grid-column-end: 4;

      & > textarea {
         border-color: ${(props) => (props.errors.tags &&  props.theme.lightBlue ) }
      }
     
    }


    & > .item5 {
      grid-column-start:1;
      grid-row:5; 
      grid-column-end:2
     
    }

    & > .item6 {
      grid-row: 5;
      grid-column-start:2;
      grid-column-end:2
    }

     & > h2{
       grid-row: 5;
     }

     
 
 
    @media screen and (max-width: 683px) {
     display: flex;
     flex-direction: column;

     & > .item3 {
      
     height: 200px;
    }
  }

`

const Introductionh1 = styled.h1`

`



const TextArea = styled.textarea`

     border: 5px  solid;
   
     border-radius: 20px;
     font-size: 30px;
     text-align: center;
     width: 100%;
     height: 100%;

    
`

 const DivimgSelected = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    border: 5px  solid;
      border-radius: 20px;
      border-color: ${props => (props.errors?.image && props.theme.lightBlue)};
 `

const CreateArticleInput = styled.input` 
   height: 30px;
  
  
`

const ImgSelected = styled.img`
  width:100% ;

  align-self: center;
  margin-top: 50px;

  @media screen and (max-width: 683px) {
   width: 70%;
   height: 70%;
   margin-top: 0px;
   
  }
   

`

 export const ErrorMessage = styled.small`

  color: red;
  grid-row: auto;

`

const TextAreaTitle = ({value,change, errors}) => {
  
  return(
        <div className="item1" >
           
           <ReactQuill  theme="bubble"  style={{border: '5px  solid',
              borderRadius: '20px',
              fontSize: '30px',
              textAlign: 'center',
              width: '100%',
              height: '100%' } } value={value} onChange={change} 
              placeholder='Title'/>
         {errors.title && <ErrorMessage>the title should be correct</ErrorMessage>}
       </div>
  )

}



const TextAreaContent = ({value,change, errors}) => {
console.log(errors)
  return(
        <div className="item2">
           
           <ReactQuill  theme="bubble"  style={{border: '5px  solid',
              borderRadius: '20px',
              fontSize: '30px',
              textAlign: 'center',
              width: '100%',
              height: '100%' } } value={value} onChange={change} 
              placeholder='content'/>
           {errors.content && <ErrorMessage>the content should be correct</ErrorMessage>}
       </div>
  )

}

const TextAreaTags = ({value,change, errors}) => {
  
  return(
        <div className="item4">
              <ReactQuill  theme="bubble"  style={{border: '5px  solid',
              borderRadius: '20px',
              fontSize: '30px',
              textAlign: 'center',
              width: '100%',
              height: '100%' } } value={value} onChange={change} 
              placeholder='content'/>
           {errors.content && <ErrorMessage>the content should be correct</ErrorMessage>}
       </div>
  )

}


const TextAreaCategory = ({register, errors}) => {
  
  return(
        <div className="item5">
         <h2 style={{ gridColumn:2 }}>Select one Category:</h2>
         <select name="category" style={{  }} /*onChange={handleInputChange}*/ {...register('category')}>
            
           <option >Fit</option>
           <option >Healty Food</option>
           <option >Habits</option>
           <option >Healty Integral</option>
         </select>
         <button as="input" type="submit"  /*onClick={handleCreateUser}*/ >enviar</button> 
       </div>
  )

}



const CreateArticle = () => { 
  const select = document.getElementById('form')
  
   const {file, handleFileChange, register,watch,setValue, handleSubmit,onSubmit, errors, isFormLoading, wasPublished} =  useCreateArticle({select})
   
  const {formValues, handleInputChange, reset} = useForm()
   
  useEffect(() => {
    register("title", { required: true, minLength: 11 });
    register("content", { required: true, minLength: 11 });
  }, [register]);
  

 //console.log(errors);
 const onTitleStateChange = (titleState) => {
  setValue("title", titleState);
};
const title = watch("title");

   const onContentStateChange = (contentState) => {
    setValue("content", contentState);
  };
  const content = watch("content");
  
  const ontagsStateChange = (contentState) => {
    setValue("tags", contentState);
  };
  const tags = watch("tags");

 return(
    <CreateArticleForm  enctype="multipart/form-data" id='form' onSubmit={handleSubmit(onSubmit) } errors={errors}>
       <Introductionh1>Build your Article </Introductionh1>
       <TextAreaTitle value={title} change={onTitleStateChange} errors={errors}  />
       <TextAreaContent value={content} change={onContentStateChange} errors={errors}/>
        <DivimgSelected className="item3" errors={errors} >
          <CreateArticleInput  type="file" pleaceholder="Content"  name="image"  {...register('image',{required:true})} errors={errors} onChange={handleFileChange}/>
          {file ?  <ImgSelected src={file}/> : <p style={{textAlign:'center', fontSize:'1.2em'}}>Select one picture</p>}
          {errors.content && <ErrorMessage>Select a image for your article please</ErrorMessage>}
       </DivimgSelected>
      
       
       <TextAreaTags value={tags} change={ontagsStateChange} errors={errors}/>
       <TextAreaCategory register={register}/>
       
       {isFormLoading && <LoaderSpinner className='item6' data-testid="spinner" small />}
       {wasPublished && <p className='item6'>Articulo Publicado!!</p>}
    </CreateArticleForm>
 )


}

export default CreateArticle

