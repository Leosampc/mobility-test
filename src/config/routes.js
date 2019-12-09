const express = require('express');

const routes = express.Router();

routes.get('/hello-world', (req, res, next) => {
    res.send('Hello World!');
});
 
module.exports = routes;