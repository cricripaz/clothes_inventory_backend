const express = require('express');
const itemController = require('../controllers/itemController')
const router = express.Router();



router.post('/addItem', itemController.addItem);
router.get('/getAll',itemController.getAllItems);
router.put('/addQuantityProduct',itemController.addQuantityProduct)

module.exports = router;