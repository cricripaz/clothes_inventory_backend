const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();



router.post('/addItem', itemController.addItem);
router.get('/getAll',itemController.getAllItems);
router.get('/getItem',itemController.getItem);
router.post('/getItemByName',itemController.getItemByName);
router.post('/get-item-by-name-type',getItemByNameType);
router.post('/getQuantity',itemController.getQuantity);
router.post('/get-quantity-for-sale',itemController.getQuantityForSale);
router.put('/addQuantityProduct',itemController.addQuantity);


module.exports = router;