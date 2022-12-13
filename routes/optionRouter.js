const express = require('express');
const optionController = require('../controllers/optionController');
const router = express.Router();


router.get('/optionsType',optionController.getOptionsType);
router.post('/addOptionType',optionController.addOptionType);

module.exports = router;
