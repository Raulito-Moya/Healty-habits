import react, { Fragment, useState } from 'react'
import styled from 'styled-components'
import postNewArticle from '../../API/postNewArticle'
import useCreateArticle from '../../Hooks/useCreateArticle'
import { useForm } from 'react-hook-form'



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

const CreateArticleInput = styled.input` 
   height: 30px;
    
  
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

const ErrorMessage = styled.small`

  color: red;
  grid-row: auto;

`

const TextAreaTitle = ({register, errors}) => {
  
  return(
        <div className="item1" >
           
         <TextArea type="text" placeholder="title.." name="title"     {...register("title", {required:true,pattern:/^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,message:"should be 2 length"})} />
         {errors.title && <ErrorMessage>the title should be correct</ErrorMessage>}
       </div>
    

  )

}



const TextAreaContent = ({register, errors}) => {
  
  return(
        <div className="item2">
           
         <TextArea type="text" placeholder="content.." name="content" errors={errors}    {...register("content", {required:true,pattern:/^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,message:"should be 10 length"})} />
         {errors.content && <ErrorMessage>the content should be correct</ErrorMessage>}
       </div>
    

  )

}

const TextAreaTags = ({register, errors}) => {
  
  return(
        <div className="item4">
           
         <TextArea type="text" placeholder="tags..[ej:healty, healtyfood]" name="tags" errors={errors}    {...register("tags", {required:true,pattern:/^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/,message:"should be 10 length"})} />
         {errors.tags && <ErrorMessage>the tags should be correct</ErrorMessage>}
       </div>
    

  )

}


const TextAreaCategory = ({register, errors}) => {
  
  return(
        <div className="item5">
         <h2 style={{ gridColumn:2 }}>Select one Category:</h2>
         <select name="category" style={{  }} /*onChange={handleInputChange}*/ {...register('category')}>
            
           <option   >Fit</option>
           <option >Healthy Food</option>
           <option >Habits</option>
           <option >Healthy Integral</option>
         </select>
         <button as="input" type="submit"  /*onClick={handleCreateUser}*/ >enviar</button> 
       </div>
  )

}



const CreateArticle = () => { 


   const {file,formValues, handleFileChange,register, handleSubmit,errors} =  useCreateArticle()
  
 
 //console.log(errors);

 const onSubmit = (data,e) => {console.log(data)};
 
   const handleCreateUser  = (e) => {
      e.preventDefault()
   
      const {title, content, tags, category} =  formValues
       console.log(title);
     
  
  }
 
   const select = document.getElementById('form')

 return(
    <CreateArticleForm  enctype="multipart/form-data" id='form' onSubmit={handleSubmit(onSubmit) } errors={errors}>
       <Introductionh1>Build your Article </Introductionh1>
       <TextAreaTitle register={register} errors={errors}  />
       <TextAreaContent register={register} errors={errors}  />
       <DivimgSelected className="item3">
          <CreateArticleInput  type="file" pleaceholder="Content"  name="image"  {...register('image',{required:true})} errors={errors} onChange={handleFileChange}/>
          {file ?  <ImgSelected src={file}/> : <p style={{textAlign:'center', fontSize:'1.2em'}}>Select one picture</p>}
          {errors.content && <ErrorMessage>Select a image for your article please</ErrorMessage>}
       </DivimgSelected>
      
       
       <TextAreaTags register={register} errors={errors}/>
       <TextAreaCategory register={register}/>
    </CreateArticleForm>
 )


}

export default CreateArticle

