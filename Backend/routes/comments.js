const router = require('express').Router();
const multer = require('multer');
const upload = multer();

const {postComment } = require('../controllers/commentsController')



router.post(`/addcomment/:token`,upload.none(), postComment)

module.exports = router