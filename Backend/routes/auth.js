const router = require('express').Router();
const { sendConfirmationEmail, validateEmail, loginUser, setResetPaswordEmail, resetPassword } = require('../controllers/authController');


router.post('/login',loginUser)
router.post('/confirmation', sendConfirmationEmail)
router.get('/validation/:id', validateEmail)
router.post('/emailresetpassword',setResetPaswordEmail)
router.post('/resetpassword/:token',resetPassword)

module.exports = router