const express = require('express');
const bodyParser = require('body-parser');

const _connect = require('./db/_connect');




//MONGO CONNECTION
_connect();


const app = express();


app.use(bodyParser.json());





//ROutes

app.get('/',(req,res) => {
    res.send({message: "hola v"})
})

app.listen(process.env.PORT, () => console.log('server on port', process.env.PORT))