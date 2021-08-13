import { useState } from "react"
import { useForm } from "react-hook-form";
import postNewArticle from "../API/postNewArticle";



const useCreateArticle = ({select}) => {
     

  const { register, handleSubmit,watch, formState: { errors } }= useForm({
    mode: "onBlur",
  });
  
  const [file,setfile] = useState(null)
  console.log(file);
  const onSubmit = (data,e) => { postNewArticle(data,file,select) };


    
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


    
 
   


    return {register, handleSubmit, onSubmit, errors,  file, handleFileChange}

}

export default useCreateArticle