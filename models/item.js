const mongoose = require('mongoose');
const e = require("express");

const itemSchema = mongoose.Schema({

    name : {
        type:String,
        required: true
    },
    brand:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
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
    price_buy:{
        type : Number,
        required : true
    },
    price_sell:{
        type : Number,
        required : true
    },
    entry_date : {
        type : Date,
        required : true
    },
    exit_date : {
        type : Date,
        required : true
    }

});

itemSchema.statics.addItem = addItem;
itemSchema.statics.getAllItems = getAllItems;

module.exports = mongoose.model('item',itemSchema,'items');

function getAllItems(){
    return this.find({});
}
function addItem (item_info){

    const newItem = {

        name:item_info.name,
        brand:item_info.brand,
        gender:item_info.gender,
        type:item_info.type,
        size:item_info.size,
        quantity:item_info.quantity,
        price_buy:item_info.price_buy,
        price_sell:item_info.price_sell,
        entry_date: item_info.entry_date,
        exit_date : item_info.exit_date,

    };
    return this.create(newItem);

}