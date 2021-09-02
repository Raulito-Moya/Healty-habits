const mongoose = require('mongoose')
const { response, request } = require('express')
const User = require('../models/User')
const jwt =require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const getUsers = async (req,res = response) => {
 
    const query = {active:true}
 
    const [total, articles] = await Promise.all([
        Article.countDocuments(query),
        Article.find(query)
    ])


 res.status(200).json({total, articles})
   
}


const postUser = async(req,res = response) => {
 
  const { name, email, password,confirmPassword  } = req.body
   console.log(req.body);
  if(password !== confirmPassword ) return res.status(400).json({error:'The passsword should be equals'})

  const id = mongoose.Types.ObjectId();
  const writerid = mongoose.Types.ObjectId();

  const user = new User({
     _id:id,
     name,
     email,
     password,
     writerid
  })

  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync( password, salt ) //encripto la contrasena


 await user.save()
  
 const token = jwt.sign({ 
    id, 
  
  }, process.env.JWT_USER_CONFIRMATION);


 res.status(200).json({token, redirect:'/confirmation', name:name, writerid:writerid})

}

//todo:crear un contoller para update el sucribet del usario cuanado confimre el correo


module.exports = {getUsers,postUser }