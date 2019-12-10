const express = require('express');

const LineController = require('../controllers/LineController');
const ItineraryController = require('../controllers/ItineraryController');

const routes = express.Router();

routes.get('/lines', LineController.findAll);
routes.get('/lines/:id', LineController.findById);
routes.post('/lines', LineController.store);
routes.put('/lines/:id', LineController.update);
routes.delete('/lines/:id', LineController.deleteById);

routes.get('/itineraries', ItineraryController.findAll);
routes.post('/itineraries', ItineraryController.store);
routes.put('/itineraries/:line_id', ItineraryController.update);
routes.delete('/itineraries/delete-all/:line_id', ItineraryController.deleteByLineId);
routes.delete('/itineraries/delete-each/:line_id', ItineraryController.deleteItinerariesByLineId);

module.exports = routes;