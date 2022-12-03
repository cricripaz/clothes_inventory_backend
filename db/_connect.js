const mongoose = require('mongoose');



async function _connect (){

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log('MONGO DB CLOUD CONNECTED')

    }catch (error){
        console.error(error);
    }
}

module.exports = _connect;