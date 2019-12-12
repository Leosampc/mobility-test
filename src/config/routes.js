const express = require('express');

const LineController = require('../controllers/LineController');
const ItineraryController = require('../controllers/ItineraryController');
const TaxiStandController = require('../controllers/TaxiStandController');

const { datapoa, poatransporte } = require('../services/integrations');

const routes = express.Router();



routes.get('/datapoa-integration', datapoa);
routes.get('/poatransporte-integration', poatransporte);

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

routes.use('/taxi-stands/public', TaxiStandController.renderStand);
routes.get('/taxi-stands', TaxiStandController.readStand);
routes.post('/taxi-stands', TaxiStandController.writeStand);

module.exports = routes;