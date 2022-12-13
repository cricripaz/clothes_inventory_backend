const getModelByName = require('../db/getModelByName');


module.exports.getOptionsType = function (req,res){
    const Option = getModelByName('option');

    try {
        Option.getOptionsType(req.body)
            .then((options) =>{
                res.status(200).send(options);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}

module.exports.addOptionType = function (req,res) {

    const Option = getModelByName('option');

    try {
        Option.addOptionType(req.body)
            .then(() =>{
                res.status(200).send({success:true , message: 'Option created succesfully'});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}