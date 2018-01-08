const tripRepository = require('../models/TripRepository');

class TripController {

  async getTrips(req, res) {
    const trips = await tripRepository.getTrips();
    res.json(trips);
  }

  async getTrip(req, res) {
    const tripId = req.params.tripId;
    const trip = await tripRepository.getTrip(tripId);
    res.json(trip);
  }

  async updateTrip(req, res) {
    const trip = await tripRepository.updateTrip(req.body);
    res.status(200).send(trip);
  }

  async addTrip(req, res) {
    const trip = await tripRepository.addTrip(req.body);
    res.status(201).send(trip);
  }

  async deleteTrip(req, res) {
    const tripId = req.params.tripId;
    await tripRepository.deleteTrip(tripId);
    res.status(204).send('Removed');
  }

  async getCountries(req, res){
    const countries = await tripRepository.getCountries();
    res.json(countries);
  }

  async getCities(req, res){
    let country = req.params.country;
    const cities = await tripRepository.getCities(country);
    res.json(cities);
  }
}

module.exports = new TripController();
