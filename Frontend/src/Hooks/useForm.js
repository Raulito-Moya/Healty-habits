import React from 'react'
import {useState, useEffect} from 'react'

export const useForm = ( initialState = {} ) => {
 
  const [formValues, setValues] = useState(initialState)

    const reset = () => {
       setValues(initialState)
    }

  const handleInputChange = ({target}) => {
         
    setValues({
      
       ...formValues,
       [target.name]: target.value //aqui digo que el target.name es igual al target.value y se lo almacenocomo valor

     })
    
  }

  const handleFileChange = ({target}) => {
     
    const file = target.files[0]
    console.log('hola');
    const imgBlob = URL.createObjectURL(file);
     console.log(imgBlob);
    
    setValues({
      
      ...formValues,
      [target.name]: imgBlob //aqui digo que el target.name es igual al target.value y se lo almacenocomo valor

    })
     
  }


  return [formValues, handleInputChange,handleFileChange, reset]

}
