const mongoose = require('mongoose');

require('../models/item');
require('../models/option');
require('../models/brand');
require('../models/size');



function getModelByName(name){
    return mongoose.model(name);
}


module.exports = getModelByName;