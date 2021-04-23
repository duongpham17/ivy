const router = require('express').Router();
const authController = require('../controllers/authController');
const galleryController = require('../controllers/galleryController');

router.get('/', galleryController.getGallery);

router.use(authController.protect);
router.post('/', galleryController.createGallery);
router.patch('/:id', galleryController.updateGallery);
router.delete('/:id', galleryController.deleteGallery);
router.patch('/upload/:id', galleryController.uploadImage);

module.exports = router