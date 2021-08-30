const router = require('express').Router();

const {postComment } = require('../controllers/commentsController')

router.post(`/addcomment/:token`,postComment)

module.exports = router