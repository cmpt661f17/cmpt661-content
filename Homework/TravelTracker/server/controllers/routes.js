const express = require('express');
const tripController = require('./TripController');

const router = express.Router();

router.get('/cities/:country', tripController.getCities);
router.get('/countries', tripController.getCountries);

router.route('/trips/')
          .get(tripController.getTrips)
          .post(tripController.addTrip);

router.route('/trips/:tripId')
          .get(tripController.getTrip)
          .put(tripController.updateTrip)
          .delete(tripController.deleteTrip);

module.exports = router;