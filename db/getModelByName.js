const mongoose = require('mongoose');

require('../models/item')



function getModelByName(name){
    return mongoose.models(name);
}


module.exports = getModelByName;