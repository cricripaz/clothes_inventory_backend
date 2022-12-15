const express = require('express');
const itemController = require('../controllers/itemController')
const router = express.Router();



router.post('/addItem', itemController.addItem);
router.get('/getAll',itemController.getAllItems);
router.get('/getItem',itemController.getItem);
router.get('/getItemByName',itemController.getItemByName);
router.put('/addQuantityProduct',itemController.addQuantity);

module.exports = router;