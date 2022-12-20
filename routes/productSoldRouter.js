const express = require('express');
const productSoldController = require('../controllers/productSoldController');
const getModelByName = require("../db/getModelByName");
const router = express.Router();

router.post('/products-sold',productSoldController.addSellProduct);


module.exports = router;