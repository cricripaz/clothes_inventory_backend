const mongoose = require('mongoose');

require('../models/item');
require('../models/option');




function getModelByName(name){
    return mongoose.model(name);
}


module.exports = getModelByName;