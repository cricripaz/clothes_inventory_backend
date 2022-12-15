const express = require('express');
const sizeController = require('../controllers/sizeController');
const router = express.Router();

router.get('/optionsSize',sizeController.getOptionsSize);
router.post('/addOptionSize',sizeController.addOptionSize);

module.exports = router;
