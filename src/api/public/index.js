const express = require('express');
const app = express();

app.use('/wifi', require('./wifi'));

module.exports = app;