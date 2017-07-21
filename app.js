const express = require('express');
const logger = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// const router = require('./routes/index');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

// BEGIN DEV WEBPACK

const config = require(path.join(__dirname, '/webpack.config.js'));

const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('', (req, res, next) => {
  res.sendFile('/Public/index.html')
})

// END DEV WEBPACK

// app.use(express.static(path.join(__dirname, 'dist')));

// app.use(bodyParser.json());

// app.use('/', router);

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })

app.listen(PORT, () => console.log('Good to Go'));
``
