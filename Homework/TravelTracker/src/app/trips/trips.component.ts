import { Component, OnInit } from '@angular/core';
import {TripService} from '../trip.service';
import { Trip} from '../trip';

@Component({
  selector: 'app-trips',
  templateUrl: `./trips.component.html`
})
export class TripsComponent implements OnInit {

  title = 'Trips';
  trips;

  constructor(private tripService: TripService) {
  }

  async ngOnInit() {
      this.trips = await this.tripService.getTrips();
  }

  async delete(tripToDelete: Trip) {
      await this.tripService.deleteTrip(tripToDelete._id);
      this.trips = this.trips.filter(trip => trip !== tripToDelete);
  }
}
