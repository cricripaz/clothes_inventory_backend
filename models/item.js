const mongoose = require('mongoose');
const e = require("express");

const itemSchema = mongoose.Schema({

    name : {
        type:String,
        required: true
    },
    type : {
        type : String,
        required: true
    },
    size : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    entryDate : {
        type : Date,
        required : true

    },
    exitDate : {
        type : Date,
        required : true
    }

});

itemSchema.statics.addItem = addItem;

mongoose.model('Item',itemSchema,'items')


function addItem (item_info){

    const newItem = {

        name:item_info.name,
        type:item_info.type,
        size:item_info.size,
        quantity:item_info.quantity,
        entryDate: item_info.entryDate,
        exitDate : item_info.exitDate,

    };
    return this.create(newItem);

}