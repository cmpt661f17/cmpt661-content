const Trip = require('./TripModel');
//const fetch = require('node-fetch')
const fs = require('fs-extra')

class TripRepository {

  /*Methods used to init the DB with trips */
  async  initDb(){
    await Trip.remove({});
    const tripsCount = await this.getTripsCount();
    console.log('Number of existing Trips:', tripsCount);
    if (tripsCount === 0) {
      await this.loadData();
    }
  }

  async loadData() {
    const trips = await fs.readJson('./server/data/trips.json');
    for (let trip of trips) {
      await this.addTrip(trip);
    }
  }

  getTrips(){
    return Trip.find({});
  }

  getTrip(tripId){
    return Trip.findById(tripId);
  }

  getTripsCount() {
    return Trip.count({});
  }

  addTrip(newTrip){
    return Trip.create(newTrip);
  }

  updateTrip(trip){
    const tripId = trip._id;
    delete trip._id;
    return Trip.update({_id : tripId} , trip);
  }

  deleteTrip(tripId) {
    return Trip.findByIdAndRemove(tripId);
  }

  async getCountries() {
      //To keep it simple and just reading from a local json cities file
      let countries = await fs.readJson('./server/data/cities.json');

      //To remove duplicates
      const countriesSet = new Set( countries.map(c => c.country) );
      countries = [...countriesSet];
      countries = countries.map(c => {
        return { name : c }
      });
      //console.log(countries);
      return countries;
  }

  async getCities(country) {
      //To keep it simple and just reading from a local json cities file
      let cities = await fs.readJson('./server/data/cities.json');
      cities = cities.filter(c => c.country.toLowerCase() === country.toLowerCase())
                     .map(c => {
                        return {name: c.city}
                     })
                     .sort((a,b) =>{
                         // Use toUpperCase() to ignore character casing
                         const cityA = a.name.toUpperCase();
                         const cityB = b.name.toUpperCase();

                         let comparison = 0;
                         if (cityA > cityB) {
                             comparison = 1;
                         } else if (cityA < cityB) {
                             comparison = -1;
                         }
                         return comparison;
                     });
      return cities;
  }
}

module.exports = new TripRepository();