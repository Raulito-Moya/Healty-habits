const { response, request } = require('express')
const {Article, CATEGORIES} = require('../models/Articles')
const fs = require("fs")
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
  })


 const getArticles = async (req,res = response) => {
 
    const query = {active:true}
 
    const [total, articles] = await Promise.all([
        Article.countDocuments(query),
        Article.find(query)
    ])


 res.status(200).json({total, articles})
  
 
}


const postArticle = async(req, res) => {
 try {
    
  const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path)
  
  console.log(imageUploaded.secured_url);
 
  const {title, content, tags,author, category } = req.body   

  console.log(req.body );

  !CATEGORIES.includes(category) && res.status(500).json({ok:'false', msg:'that category is not created'}) 
 
   const article = new Article({
      title,
      content,
      tags,
      author,
      category,
      img: imageUploaded.secure_url,
      img_id: imageUploaded.public_id
   })
  
  await article.save()
  res.status(200).json({ok:'article posted'})
 
 fs.unlink(req.file.path, (err) => {
  if (err) {
    console.error(err)
    return
  }
 })

 } catch (error) {
    console.log(error);
 }

}


const updateArticle = (req, res) => {

 res.status(200).json({ok:'Article Updated'})

}


const deleteArticle = (req, res) => {

    res.status(200).json({ok:'Article deleted'})
   
   }


module.exports = {getArticles, postArticle,  updateArticle, deleteArticle}