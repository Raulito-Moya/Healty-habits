const router = require('express').Router();
const multer = require('multer');
const upload = multer();

const { getCommentsbyArticle,postComment } = require('../controllers/commentsController')


router.get('/getcomments/:id',getCommentsbyArticle)
router.post('/addcomment/:token',upload.none(), postComment)

module.exports = router