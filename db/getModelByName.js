const mongoose = require('mongoose');

require('../models/item');
require('../models/option');
require('../models/brand');



function getModelByName(name){
    return mongoose.model(name);
}


module.exports = getModelByName;