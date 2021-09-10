const moongose = require('mongoose')

const Schema = moongose.Schema

const likesSchema = new Schema({
   creationDate: {type: Number, default: Date.now},
   user:{
     type: Schema.Types.ObjectId,
     ref:"User"
   },
   article:{
    type: Schema.Types.ObjectId,
    ref: "Article",
    required:true
  }

})

const Likes = moongose.model('Likes',likesSchema)


module.exports = Likes