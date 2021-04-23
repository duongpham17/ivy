const router = require('express').Router()
const authController = require('../controllers/authController');

router.get('/', authController.protect, authController.loggedIn);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router