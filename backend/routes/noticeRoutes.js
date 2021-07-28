const router = require('express').Router();
const authController = require('../controllers/authController');
const noticeController = require('../controllers/noticeController');

router.get('/', noticeController.getPost);

router.use(authController.protect);
router.post('/', noticeController.createPost);
router.patch('/:id', noticeController.updatePost);
router.delete('/:id', noticeController.deletePost)

module.exports = router