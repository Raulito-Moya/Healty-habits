const router = require('express').Router();
const multer = require('multer');
const upload = multer();

const { getCommentsbyArticle,postComment,updateComment,deleteComment } = require('../controllers/commentsController')


router.get('/getcomments/:id',getCommentsbyArticle)
router.post('/addcomment/:token',upload.none(),postComment)
router.put('/updatecomment/:id',upload.none(),updateComment)
router.delete('/deletecomment/:id',upload.none(),deleteComment)

module.exports = router