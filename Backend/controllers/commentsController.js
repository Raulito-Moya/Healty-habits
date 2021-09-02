const { response, request } = require('express')
const jwt =require('jsonwebtoken');
const { Article } = require('../models/Articles')
const User = require('../models/User')
const Comment = require('../models/Comments')


const getCommentsbyArticle = async(req = request,res = response) => { 
   try {
      const {id:IDArticle} = req.params;
      const articlefinded = await Article.findById(IDArticle);

      const Commentsfound = await Comment.find({_id: { $in: articlefinded.comments }});
     
     

      if(Commentsfound){
        res.json(Commentsfound)
      }
   } catch (error) {
     console.log(error);
   }



 };


const postComment = async(req = request,res = response) => {
   try {
     const { token } = req.params;  
     
     const {IDarticle, textContent} = req.body;
     const decoded = jwt.verify(token, process.env.JWT_USER_CONFIRMATION); 
     const userid  = decoded.id;
       

     const articleFound = await Article.findById(IDarticle)
     const userfound = await User.findById(userid)
     
  
    

     const comment = new Comment({
        user: userfound._id,
        article: articleFound._id,
        author: userfound.name,
        content: textContent,
        writerid: userfound.writerid
     })
    
     await comment.save()
   

     await Article.findByIdAndUpdate(IDarticle,{
      $set: {
          comments:[...articleFound.comments,comment ]
      }
  
      })
    
   
    await User.findByIdAndUpdate(userid,{
      $set: {
        comments:[...userfound.comments,comment]
      }
    })



     res.json({msg:'ok',comment:comment})
   
   } catch (error) {
     console.log(error);
   }
  



}


module.exports = { getCommentsbyArticle,postComment}