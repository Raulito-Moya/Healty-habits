
const moongose = require('mongoose');

const Schema = moongose.Schema;


const commentsSchema = new Schema({
    creationDate: {type: Number, default: Date.now},
    user:{
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    article:{
     type: Schema.Types.ObjectId,
     ref: "Article",
     required:true
   },
   content:{
       type:String,
       required:[true,'the comment content is required']
   }
 
 })

 const Comment = moongose.model('Comment',commentsSchema)

 module.exports = Comment