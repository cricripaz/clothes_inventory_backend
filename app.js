const express = require('express');
const bodyParser = require('body-parser');
const _connect = require('./db/_connect');
const itemsRoutes = require('./routes/itemRouter');
const optionsRoutes = require('./routes/optionRouter');
const brandRoutes = require('/routes/brandRouter');

const cors = require('cors');



//MONGO CONNECTION
_connect();


const app = express();

app.use(cors())
app.use(bodyParser.json());





//Routes

app.use('/items', itemsRoutes);
app.use('/options', optionsRoutes);
app.use('/optionsBrand', brandRoutes);



app.listen(process.env.PORT, () => console.log('server on port', process.env.PORT))