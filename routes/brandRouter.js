const express = require('express');
const brandController = require('../controllers/brandController');
const router = express.Router();

router.get('/optionsBrand',brandController.getOptionsBrand);
router.post('/addOptionBrand',brandController.addOptionBrand);

module.exports = router;
