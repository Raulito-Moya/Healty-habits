const jwt =require('jsonwebtoken');
require('dotenv').config({path: '.env'})

const User = require('../models/User')


const checkIsValidUser = (req,res,next) => {
 
    const {email,password} = req.body

if( !email || !password)res.status(400).json({successful:false, message:`Missing inputs, name: ${name}  email:${email} password:${password}`})

let reg = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

let isValidEmail = reg.test(email)

if(!isValidEmail) return res.status(400).json({ok:false, msg:`Email is not valid`})

next()
}



const validateToken = (req, res, next) => {

  const {token} = req.body
  
   if(!token){
       res.status(400).json({ok:false, msg:'No token recived'})
   }
  
 
   next()
}

const validateId = (req, res, next) => {

 const {id} = req.params
  
 if(!id){
    res.status(400).json({ok:false, msg:'No id recived'})
 }
 
 next()
}


const CheckExistUserByEmail = async(req, res, next) =>{

  const {  email  } = req.body

    try {
      
        const userFound = await User.findOne({email}) 
      
        if(userFound){ return res.json({ok:false,error:' already exist a user with that email'})}

    } catch (error) {
        console.log(error); 
    }


 next()   
}



module.exports = {checkIsValidUser,validateToken,validateId,CheckExistUserByEmail}