const express = require('express');
const logger = require('morgan');

const router = require('./routes/index');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use('/', router);

app.listen(PORT, () => console.log('Good to Go'));
``
