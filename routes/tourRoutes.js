const express = require('express');
const tourController = require('../controllers/tourController');

const Router = express.Router();

Router.param('id', tourController.checkId);

Router.route('/')
  .get(tourController.getAllTour)
  .post(tourController.createTour);
Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.upadateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
