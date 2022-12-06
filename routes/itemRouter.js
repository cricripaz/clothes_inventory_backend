const express = require('express');
const itemController = require('../controllers/itemController')
const router = express.Router();



router.post('/addItem', itemController.addItem);
router.get('/getAll',itemController.getAllItems);

module.exports = router;