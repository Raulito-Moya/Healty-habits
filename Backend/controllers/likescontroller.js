const { response, request } = require('express')
const Likes  = require('../models/Likes')
const { Article } = require('../models/Articles')


const getLikes = async (req,res = response) => {
 try {

    const [total, likes] = await Promise.all([
        Likes.countDocuments(),
       // Likes.find(query)
    ])

   res.status(200).json({likesfound})
   

 } catch (error) {
      console.log(error);
 }
    
}


const postNewLike = async(req,res = response) => {
    try {

      const {article} = req.body
      console.log(req.body);
 
    const like = new Likes({
     article:article._id
     })

    await like.save() 
   
    const articleFound  = await Article.findById(article._id)
 

  await Article.findByIdAndUpdate(article._id,{
    $set: {
        likes:[...articleFound.likes,like ]
    }

  })


    res.json({like})  

   } catch (error) {
        console.log(error);
    }
    
}


const getLikesByArticles = async(req,res = response) => {
  try {

    const { id } = req.params
    // console.log(id);
    const articlefinded = await Article.findById(id)
     
    const likesfound = await Likes.find({_id: { $in: articlefinded.likes }})
    
    
    res.status(200).json({likesfound})

  } catch (error) {
    
    console.log(error);
  }



}

module.exports = { getLikes, postNewLike, getLikesByArticles }