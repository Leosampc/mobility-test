const express = require('express');

const LineController = require('../controllers/LineController');

const routes = express.Router();

routes.get('/lines', LineController.findAll);
routes.get('/lines/:id', LineController.findById);
routes.post('/lines', LineController.store);
routes.put('/lines/:id', LineController.update);
routes.delete('/lines/:id', LineController.deleteById);
 
module.exports = routes;