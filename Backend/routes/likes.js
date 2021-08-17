const router = require('express').Router();
const { getLikes, postNewLike,getLikesByArticles } = require('../controllers/likescontroller');


router.get('/',getLikes)
router.get('/getlikes/:id',getLikesByArticles)
router.post('/addlike',postNewLike)

module.exports = router