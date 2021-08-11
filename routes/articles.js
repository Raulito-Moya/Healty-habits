const router = require('express').Router();
const {getArticles, postArticle,  updateArticle, deleteArticle} = require('../controllers/articlesController');
const { validatefile } = require('../middlewares/validar-archivo');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'BackImages')
    },
  
    filename: function(req,file,cb){
      cb(null,  Date.now()+path.extname(file.originalname))
    },
  
    
  });

  /*const filefilter = (req,file,cb) =>{
    if(!file){
      cb(null,false)
    }else{
      cb(null,true)
    }
  }*/
  


const upload = multer({
    storage: storage,
    /*limits: { fieldSize: 10 * 1024 * 1024 },*/
   /* fileFilter: filefilter*/
  });


router.get('/',getArticles)
router.post('/postArticle',upload.single('image'),postArticle)
router.put('/updateArticle', updateArticle)
router.delete('/deleteArticle', deleteArticle)

module.exports = router