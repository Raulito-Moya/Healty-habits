const moongose = require('mongoose')

const Schema = moongose.Schema


const UserSchema = new Schema({
    name: {
      type:String,
      required:[true, 'name is required']
    },
    email:{
        type:String,
        required: [true, 'eamil is required'],
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
    state: {
        type: Boolean,
        default: true
    }

})


module.exports = model( 'User', UserSchema )