

const validatefile = (req,res) => {

  if(!req.file){
     
    return res.status(400).json({
        ok:false,
        msg:'No file for upload detected'
    })
  
  
  }


}


module.exports = {validatefile}