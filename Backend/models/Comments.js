
const moongose = require('mongoose');

const Schema = moongose.Schema;


const commentSchema = new Schema({
    creationDate: {type: Number, default: Date.now},
    user:{
      type: Schema.Types.ObjectId,
      ref:"User",
      required:[true,'the User content is required']
    },
    article:{
     type: Schema.Types.ObjectId,
     ref: "Article",
     required:[true,'the Article content is required']
   },
   content:{
       type:String,
       required:[true,'the Comment Content is required']
   }
 
 })

 const Comment = moongose.model('Comments',commentSchema)

 module.exports = Comment