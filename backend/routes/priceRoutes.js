const router = require('express').Router();
const authController = require('../controllers/authController');
const priceController = require('../controllers/priceController');

router.get('/', priceController.getPrice);

router.use(authController.protect);
router.post('/', priceController.createPrice);
router.patch('/:id', priceController.updatePrice);
router.delete('/:id', priceController.deletePrice)

module.exports = router