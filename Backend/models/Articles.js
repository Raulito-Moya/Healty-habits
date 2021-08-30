const moongose = require('mongoose')

const Schema = moongose.Schema

const CATEGORIES = ['Habits','Fit','Healty Food','Healty Integral']

const articleSchema = new Schema({
  
  creationDate: {type: Number, default: Date.now },
  title:{type:String,required: [true, ' title is requiered'] },
  content:{type:String, required:true},
  img:{type:String, trim:true, required:[true,'the img is required']},
  img_id:{type:String, trim:true,  required:[true,'the img_id is required']},
  category:{type:String, required:[true, 'Category is requiered']},
  active:{type:Boolean, default:true},
  author:{type:String, required:[true, 'author is requiered'], deafault:'admin'},
  tags:{ type:Array, required:[true, 'tags is requiered'] },
  likes:[ {type:Schema.Types.ObjectId, ref:"Likes"} ],
  comments:[ { type:Schema.Types.ObjectId, ref:"Comments"} ]
  
}
)

const Article = moongose.model('Article',articleSchema)

module.exports = {Article,CATEGORIES}