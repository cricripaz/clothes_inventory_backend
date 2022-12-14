const getModelByName = require('../db/getModelByName');


module.exports.addItem = function (req,res) {

    const Item = getModelByName('item');

    try {
        Item.addItem(req.body)
            .then(() =>{
                res.status(200).send({success:true , message: 'Item created succesfully'});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}


module.exports.getAllItems = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getAllItems(req.body)
            .then((items) =>{
                res.status(200).send(items);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}


module.exports.getItem = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getItem(req.body)
            .then((item) =>{
                res.status(200).send(item);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }
}
module.exports.getItemByName = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getItemByName(req.body)
            .then((item) =>{
                res.status(200).send(item);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }
}

module.exports.getItemByNameType = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getItemByNameType(req.body)
            .then((item) =>{
                res.status(200).send(item);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }
}

module.exports.getItemByNameTypeSize = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getItemByNameTypeSize(req.body)
            .then((item) =>{
                res.status(200).send(item);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }
}

module.exports.getQuantity = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getQuantity(req.body)
            .then((item) =>{
                res.status(200).send({quantity : item.quantity});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }
}

module.exports.getQuantityForSale = function (req,res){
    const Item = getModelByName('item');

    try {
        Item.getQuantityForSale(req.body)
            .then((item) =>{
                res.status(200).send({quantity : item.quantity});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }
}


module.exports.addQuantity = function (req,res) {

    const Item = getModelByName('item');

    try {
        Item.addQuantity(req.body,req.body.quantity)
            .then(
                data => {
                    res.status(200).send({success:true , result : data });
                }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}

module.exports.sellProduct = function (req,res) {

    const Item = getModelByName('item');

    try {
        Item.sellProduct(req.body,req.body.quantity_sell)
            .then(
                data => {
                    res.status(200).send({success:true , result : data });
                }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}

module.exports.deleteItem = function (req,res) {

    const Item = getModelByName('item');

    try {
        Item.deleteItem(req.body)
            .then((articles) =>{
                res.status(200).send({success:true , message: "removed Item" });
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}