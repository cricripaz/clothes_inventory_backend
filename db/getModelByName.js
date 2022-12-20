const mongoose = require('mongoose');

require('../models/item');
require('../models/option');
require('../models/brand');
require('../models/size');
require('../models/product_sold');





function getModelByName(name){
    return mongoose.model(name);
}


module.exports = getModelByName;