const mongoose = require('mongoose');
const e = require("express");


const optionSchema = mongoose.Schema({

    name : {
        type:String,
        required: true
    }
});


optionSchema.statics.addOptionType = addOptionType;
optionSchema.statics.getOptionsType = getOptionsType;



module.exports = mongoose.model('option','options-type');



function getOptionsType(){
    return this.find({});
}


function addOptionType(option_info){

    const newOption = {
        name:option_info.name
    }

    return this.create(newOption);

}