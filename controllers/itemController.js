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
                res.status(200).send({success:true , response : items});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}