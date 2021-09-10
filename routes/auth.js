const router = require('express').Router();
const { check } = require('express-validator');
const { sendConfirmationEmail, validateEmail, loginUser, setResetPaswordEmail, resetPassword } = require('../controllers/authController');
const { checkIsValidUser,validateToken,validateId } = require('../middlewares/userValidator');
const { validateFields } = require('../middlewares/validate-fields');


router.post('/login', [checkIsValidUser] ,loginUser)
router.post('/confirmation', [validateToken] ,sendConfirmationEmail)
router.get('/validation/:id', [validateId] ,validateEmail)
router.post('/emailresetpassword',setResetPaswordEmail)
router.post('/resetpassword',resetPassword)

module.exports = router