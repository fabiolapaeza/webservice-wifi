const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let http = require("http").Server(app);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

require('../api')(app);
// parse application/json
app.use(bodyParser.json())



app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});