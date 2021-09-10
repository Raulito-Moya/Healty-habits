const router = require('express').Router();
const { getUsers, postUser } = require('../controllers/usersController');
const {CheckExistUserByEmail} = require('../middlewares/userValidator')

router.get('/',getUsers)
router.post('/createuser', [CheckExistUserByEmail] ,postUser)



module.exports = router