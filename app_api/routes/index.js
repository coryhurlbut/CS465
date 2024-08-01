const express = require('express');
const router = express.Router();

// This is where we import the controllers we will router
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router.route('/trips').get(tripsController.tripsList); //GET method routes triplist
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode); //GET method routes tripsFindByCode

module.exports = router;
