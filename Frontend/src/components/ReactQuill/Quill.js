import React, { useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useStorage } from '../../context/useStorage';

export const Quill = () => {

    
 const { changePath,setChangePath} =  useStorage()
  


    useEffect(()=> {
        setChangePath(true)
     },[])
    



    return (
        <div >
            <h1>hello</h1>
             <ReactQuill theme="bubble" style={{border:'black solid'}} />
        </div>
       
    )
}
