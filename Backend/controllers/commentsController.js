const { response, request } = require('express')
const { Article } = require('../models/Articles')
const User = require('../models/User')
const Comment = require('../models/Comments')

const postComment = async(req = request,res = response) => {
   try {
     const { token } = req.params;  
      
     const decoded = jwt.verify(token, process.env.JWT_USER_CONFIRMATION); 
     const userid  = decoded.id;
       
     const articleFound = await Article.findById(article._id).populate({path:'comments'})
     const userfound = await User.findById(userid).populate({path:'comments'})

     

     const comment = new Comment({
        
     })


   } catch (error) {
     console.log(error);
   }
  



}


module.exports = {postComment}