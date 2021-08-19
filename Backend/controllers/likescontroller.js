const { response, request } = require('express')
const Likes  = require('../models/Likes')
const { Article } = require('../models/Articles')
const jwt =require('jsonwebtoken');


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
      const { token } = req.params
    
      const decoded =   jwt.verify(token, process.env.JWT_USER_CONFIRMATION)
      
      const userid  =  decoded.id
       console.log(userid);
      const {article} = req.body
     // console.log(req.body);
   
    
      const articleFound  = await Article.findById(article._id).populate({path:'likes'})
      console.log(articleFound);

      const errorLike = articleFound.likes.filter(like => like.user == userid)
      console.log(errorLike);
     if(errorLike.length > 0){
       return res.status(406).json({error:'the user have a like in this article'})
     }


    const like = new Likes({
     article:article._id,
     user:userid
     })

    await like.save() 
   
  
 

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