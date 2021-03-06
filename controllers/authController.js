const jwt =require('jsonwebtoken');
const bcryptjs = require('bcryptjs')
require('dotenv').config({path: '.env'})
const User = require('../models/User')

const sendConfirmationEmailFunction = require('../libs/sendConfirmationEmail') ;
const sendResetPasswordEmailFunction = require('../libs/sendResetPassword')


const loginUser = async(req,res) => {

    const { email, password } = req.body

 try {
     

   const userFound = await User.findOne({email})     
    
   const token = jwt.sign({ 
     id:userFound.id 
  
  }, process.env.JWT_USER_CONFIRMATION);



   if(!userFound) return res.status(400).json({error:"Error User Founded"}) 

   const matchPassword =  bcryptjs.compareSync( password, userFound.password );
   
   if(!matchPassword) return res.status(400).json({error:"Error comparing password"})   
 
   
   res.json({name: userFound.name, email: userFound.email,redirect:'/', token:token, writerid:userFound.writerid})


 } catch (error) {
     console.log(error);
 }


}


const sendConfirmationEmail = async(req,res) => {
    try{

    const { token } = req.body
     
    const decoded =   jwt.verify(token, process.env.JWT_USER_CONFIRMATION)
     
    const id  =  decoded.id

     const userFound = await User.findById(id)

  

    const url = `http://localhost:7000/api/auth/validation/${id}`
  
     await sendConfirmationEmailFunction(url,userFound.email)
  
     res.status(200).json({success: true , message: " Account confirmation email has been send successfully",redirect:"http://localhost:3000/#/confirmation"})
  
  
    }catch(error){
      console.log(error);
  
     return  res.status(500).json({message:"something went wrong"})
    }
  
   
  }



 
  const validateEmail  = async (req,res) => {

    try{ 
  
     const id = req.params.id
  
     if(!id) return res.status(403).json({success:false ,message:"No id provided"})
  
  /* const decoded =   jwt.verify(token, process.env.JWT_EMAIL_CONFIRMATION_KEY)
  
  const id  =  decoded.id*/
  
  
   const user = await User.findByIdAndUpdate(id, {
    subscribed:true
     
   })
  
   if(!user) return res.status(404).json({message:"User not faund"} )
  
 
   res.redirect(`http://localhost:7000/#/`)
  
  }catch(err){
  
   console.log(err)
    
  }
  
}


const setResetPaswordEmail = async(req,res) => {
    
    try {
      const {email} = req.body
     
      const url = 'http://localhost:7000/#/forgotpassword/form'
 
      await sendResetPasswordEmailFunction(url,email)
   
      res.json({msg:'Email for get new password  have been sended',redirect:'/forgotpassword/confirmemail'})
      
    } catch (error) {
        console.log(error);
    }
 
 
 
  

}


const resetPassword = async(req,res) => {
  
try {
  
  //  const token = req.params.token 
    const { password,confirmPassword,user_email } = req.body
    
    if(password !== confirmPassword) return res.json({error:'Password are not similar'})
  
   // const decoded = jwt.verify(token, process.env.JWT_USER_CONFIRMATION)
     
   // const id = decoded.id
      
    const salt = bcryptjs.genSaltSync()
    const passwordCrypt = bcryptjs.hashSync( password, salt )

    const userFound = await User.findOneAndUpdate({email:user_email},{password:passwordCrypt}) 
   
   

  res.json({msg:'Your new password is ready',redirect:'/forgotpassword/confirmation'})

   
} catch (error) {
    console.log(error);
}
  
}



  module.exports = {loginUser, sendConfirmationEmail, validateEmail,setResetPaswordEmail,resetPassword }