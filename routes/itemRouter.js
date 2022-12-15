const express = require('express');
const itemController = require('../controllers/itemController')
const router = express.Router();



router.post('/addItem', itemController.addItem);
router.get('/getAll',itemController.getAllItems);
router.get('/getItem',itemController.getItem);
router.post('/getItemByName',itemController.getItemByName);
router.post('/getQuantity',itemController.getQuantity);
router.put('/addQuantityProduct',itemController.addQuantity);


module.exports = router;