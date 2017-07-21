const express = require('express');


const index = express.Router();

// This is the route that serves your '/' homepage
index.get('/', (req, res) => {
  res.json('Hello');
});

module.exports = index;
