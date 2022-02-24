const { response, request } = require('express')
require('dotenv').config({path: '.env'});
const Likes  = require('../models/Likes')
const { Article } = require('../models/Articles')
const User = require('../models/User')
const jwt = require('jsonwebtoken');


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
    console.log('hihihihih');
    const { token } = req.params
    console.log(process.env.JWT_USER_CONFIRMATION);
    const decoded = jwt.verify(token, process.env.JWT_USER_CONFIRMATION)
  
    const userid  = decoded.id
     console.log(userid);
    const {article} = req.body
   // console.log(req.body);
   
    
      const articleFound = await Article.findById(article._id).populate({path:'likes'})
      const userfound = await User.findById(userid).populate({path:'likes'})

      console.log(articleFound);

      const errorLike = articleFound.likes.filter(like => like.user == userid)
     // console.log(errorLike);


     if(errorLike.length > 0){  //delete the like if the user have it in the article
         
        
         const foundLike = await Likes.findByIdAndDelete(errorLike[0]._id)
          await User.findByIdAndUpdate(userid, {$pull: {likes: errorLike[0] } })
          await Article.findByIdAndUpdate(article._id, {$pull: {likes: errorLike[0] } })
       
         console.log(foundLike);

       return res.status(200).json({msg:'the like have been deleted',rest:true})
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
  
 
  await User.findByIdAndUpdate(userid,{
    $set: {
      likes:[...userfound.likes,like]
    }
  })


    res.json({msg:'the like have been added',add:true})  

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