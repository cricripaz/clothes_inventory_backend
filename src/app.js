const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;
app.use(bodyParser.json());


//ROutes

app.get('/',(req,res) => {
    res.send({message: "hola v"})
})

app.listen(PORT, () => console.log('App listening'))