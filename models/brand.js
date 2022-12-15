const mongoose = require('mongoose');
const e = require("express");


const brandSchema = mongoose.Schema({

    name : {
        type:String,
        required: true
    }
});


brandSchema.statics.getOptionsBrand = getOptionsBrand;
brandSchema.statics.addOptionBrand = addOptionBrand;


module.exports = mongoose.model('brand',brandSchema,'options-brand');



function getOptionsBrand(){
    return this.find({});
}


function addOptionBrand(brand_info){

    const newBrand = {
        name:brand_info.name
    }

    return this.create(newBrand);

}