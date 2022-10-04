import { useState } from "react"
import { useForm } from "react-hook-form";
import postNewArticle from "../API/postNewArticle";



const useCreateArticle = ({select}) => {
     

 
  
  const [file,setfile] = useState(null)
  const [isFormLoading, setisformLoading] = useState(false)
  const [wasPublished, setwasPublished] = useState(false)
  console.log(file);


  const { register, handleSubmit,watch, formState: { errors },setValue }= useForm({
    mode: "onBlur",
  });

 const onSubmit =  async(data,e) => {
    await setisformLoading(true)   
    await postNewArticle(data,file,select,setisformLoading,setwasPublished) 
      
 };


    
    // console.log(formValues);
    const handleFileChange = ({target}) => {
       
      const file = target?.files[0]
       console.log(file);
       if(file){
         const img = URL.createObjectURL(file);
         console.log(img);
         setfile(img)
       }else{
         setfile(null)
       }
        
    }


    
 
   


    return {register, handleSubmit, onSubmit, errors,  file,watch,setValue, handleFileChange, isFormLoading, wasPublished}

}

export default useCreateArticle