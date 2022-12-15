const getModelByName = require('../db/getModelByName');


module.exports.getOptionsBrand = function (req,res){
    const Brand = getModelByName('brand');

    try {
        Brand.getOptionsBrand(req.body)
            .then((options) =>{
                res.status(200).send(options);
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}

module.exports.addOptionBrand = function (req,res) {

    const Brand = getModelByName('brand');

    try {
        Brand.addOptionBrand(req.body)
            .then(() =>{
                res.status(200).send({success:true , message: 'Brand created succesfully'});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}