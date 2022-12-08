const express = require('express');
const bodyParser = require('body-parser');
const _connect = require('./db/_connect');
const itemsRoutes = require('./routes/itemRouter')
const cors = require('cors')



//MONGO CONNECTION
_connect();


const app = express();

app.use(cors())
app.use(bodyParser.json());





//ROutes

app.use('/items',itemsRoutes);


app.listen(process.env.PORT, () => console.log('server on port', process.env.PORT))