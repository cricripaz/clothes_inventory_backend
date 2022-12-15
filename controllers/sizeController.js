const getModelByName = require('../db/getModelByName');


module.exports.getOptionsSize = function (req,res){
    const Size = getModelByName('size');

    try {
        Size.getOptionsSize(req.body)
            .then((options) =>{
                res.status(200).send(options);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}

module.exports.addOptionSize = function (req,res) {

    const Size = getModelByName('size');

    try {
        Size.addOptionSize(req.body)
            .then(() =>{
                res.status(200).send({success:true , message: 'size created succesfully'});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}