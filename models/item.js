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
itemSchema.statics.getItem = getItem;
itemSchema.statics.addQuantity = addQuantity;
itemSchema.statics.sellProduct = sellProduct;
itemSchema.statics.getItemByName = getItemByName;
itemSchema.statics.getItemByNameType = getItemByNameType;
itemSchema.statics.getItemByNameTypeSize = getItemByNameTypeSize;
itemSchema.statics.getQuantity = getQuantity;
itemSchema.statics.getQuantityForSale = getQuantityForSale;
itemSchema.statics.deleteItem = deleteItem;

module.exports = mongoose.model('item',itemSchema,'items');

function getAllItems(){
    return this.find({});
}

function getItem(item_req){
    return this.findOne({name:item_req.name , size: item_req.size});
}

function getItemByName(item_req){
    return this.find({name: item_req.name})
}

function getItemByNameType(item_req){
    return this.find({name: item_req.name , type:item_req.type})
}

function getItemByNameTypeSize(item_req){
    return this.findOne({name: item_req.name , type:item_req.type ,size:item_req.size})
}
function getQuantity(item_req){
    return this.findOne({name:item_req.name , size: item_req.size})
}
function getQuantityForSale(item_req){
    return this.findOne({name:item_req.name ,type:item_req.type, size: item_req.size})
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


function addQuantity(item_info , quantity_to_add){
    return this.findOne({ name:item_info.name , size: item_info.size }).then(
        item => {
            if(!item){
                throw new Error("Item NOT FOUND");
            }
            else {
                return this.updateOne( { name : item.name , size:item.size },
                    {$set:
                            {
                                quantity : quantity_to_add
                            }
                    })

            }
        }
    ).then(item => item)
}


function sellProduct(item_info , quantity_to_add){
    return this.findOne({ name:item_info.name , size: item_info.size }).then(
        item => {
            if(!item){
                throw new Error("Item NOT FOUND");
            }
            else {
                return this.updateOne( { name : item.name , type:item.type,size:item.size},
                    {$set:
                            {
                                quantity : quantity_to_add
                            }
                    })

            }
        }
    ).then(item => item)
}


function deleteItem(item_info){
    return this.findOne({name:item_info.name ,type:item_info.type, size: item_info.size})
        .then(
            item => {

                if (!item) {
                    throw  new Error("PRODUCT ID NOT FOUND");

                }else {

                    return this.findByIdAndDelete(item_info.id)

                }


            })
        .then(item => item)
}