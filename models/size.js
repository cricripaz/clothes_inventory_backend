const mongoose = require('mongoose');
const e = require("express");


const sizeSchema = mongoose.Schema({

    name : {
        type:String,
        required: true
    }
});


sizeSchema.statics.addOptionType = addOptionSize;
sizeSchema.statics.getOptionsType = getOptionsSize;



module.exports = mongoose.model('size',sizeSchema,'options-size');



function getOptionsSize(){
    return this.find({});
}


function addOptionSize(size_info){

    const newSize = {
        name:size_info.name
    }

    return this.create(newSize);

}