const moongose = require('mongoose')

const Schema = moongose.Schema


const UserSchema = new Schema({
    name: {
      type:String,
      required:[true, 'name is required']
    },
    email:{
        type:String,
        required: [true, 'email is required'],
        unique: true //un solo correo electronico 
    },
    password:{
        type:String,
        required: [true, 'the password its required'],
        unique: true //un solo correo electronico 
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE', //exportacion por defecto
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    active: {
        type: Boolean,
        default: true
    },
    subscribed:{
     type: Boolean,
     default:false
    },
    articles:[ { type:Schema.Types.ObjectId, ref:"Article"} ],
    likes:[ { type:Schema.Types.ObjectId, ref:"Likes"} ],
    comments:[ { type:Schema.Types.ObjectId, ref:"Comments"} ],
    writerid:{
        type:Schema.Types.ObjectId,
        required:[true,'The writerID is required']
    }


})

const User = moongose.model('User',UserSchema)

module.exports = User