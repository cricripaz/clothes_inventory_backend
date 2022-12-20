const express = require('express');
const productSoldController = require('../controllers/productSoldController');
const router = express.Router();

router.post('/products-sold',productSoldController.addProductSold);
router.get('/get-all',productSoldController.getAllProducts);


module.exports = router;