const express = require('express');
const itemController = require('../controllers/userController')
const router = express.Router();



router.post('/addItem', itemController.addItem);

module.exports = router;