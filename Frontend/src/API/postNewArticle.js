

const postNewArticle = async(formValues, file, select,setisformLoading, setwasPublished) => {
 

    const headers = new Headers();
    //headers.append('Accept', 'application/json');
  //  headers.append('Content-Type', 'multipart/form-data');
    
   
    
    const {title, content, tags} = formValues
    console.log(formValues);
    const formData = new FormData(select)
     
   // formData.append('title',title)
   // formData.append('content',content)
   // formData.append('image',file)
    formData.append('author','Raul Admin')
    //formData.append('category','Fit')
    //formData.append('tags',tags)
    
     console.log(formData);
    const setting = {
        method: 'POST',
        //headers:headers,
        body: formData
      }


      try {
         
         let res = await fetch(`/api/articles/postArticle`, setting);
         setisformLoading(false)
         setwasPublished(true)
         console.log(res);
      } catch (error) {
          console.log(error);
      }

}



export default postNewArticle
