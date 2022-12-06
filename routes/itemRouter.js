const express = require('express');
const itemController = require('../controllers/itemController')
const router = express.Router();



router.post('/addItem', itemController.addItem);

module.exports = router;