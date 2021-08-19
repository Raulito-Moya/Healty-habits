const router = require('express').Router();
const { getLikes, postNewLike,getLikesByArticles } = require('../controllers/likescontroller');


router.get('/',getLikes)
router.get('/getlikes/:id',getLikesByArticles)
router.post('/addlike/:token',postNewLike)

module.exports = router