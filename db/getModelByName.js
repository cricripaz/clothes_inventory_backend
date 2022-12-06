const mongoose = require('mongoose');

require('../models/item')



function getModelByName(name){
    return mongoose.model(name);
}


module.exports = getModelByName;