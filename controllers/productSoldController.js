const getModelByName = require('../db/getModelByName');


module.exports.addSellProduct = function (req,res) {

    const ProductSold = getModelByName('product-sold');

    try {
        ProductSold.addSellProduct(req.body)
            .then(() =>{
                res.status(200).send({success:true , message: 'product created succesfully'});
            }).catch(error => res.status(200).send({success:false , message: error.message }))
    }catch (error){
        res.status(500).send({success:false , message: error.message });
    }

}
