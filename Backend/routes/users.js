const router = require('express').Router();
const { getUsers, postUser } = require('../controllers/usersController');

router.get('/',getUsers)
router.post('/createuser',postUser)

module.exports = router