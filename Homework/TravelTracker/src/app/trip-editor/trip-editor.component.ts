import { Component, OnInit } from '@angular/core';
import { Trip} from '../trip';
import {TripService} from '../trip.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-trip-editor',
  templateUrl: './trip-editor.component.html',
    styles: [`
        .error {
            color:#a94442;
        }
    `]
})
export class TripEditorComponent implements OnInit {

    visitTypes = ['Holiday', 'Business'];
    trip;
    countries;
    /*This list based on the selected country*/
    cities;

    constructor(private tripService: TripService, private router: Router, private route: ActivatedRoute) {
    }

    async ngOnInit() {
        await this.getTrip();
        this.countries = await this.tripService.getCountries();
    }

    async getTrip() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.trip = await this.tripService.getTrip(id);
            this.cities = await this.tripService.getCities(this.trip.country);
        }
        else {
            this.trip = new Trip();
            this.addLandmark();
        }
    }

    addLandmark() {
        if (!this.trip.landmarks) {
            this.trip.landmarks = [];
        }
        this.trip.landmarks.push({name: '', rating: ''});
    }

    deleteLandmark(index) {
        this.trip.landmarks.splice(index, 1);
    }

    // The cities list are rebuilt every time the country is changed
    async countryChanged(country) {
        this.cities = await this.tripService.getCities(this.trip.country);
    }

    async onSubmit() {
        if (!this.trip._id) {
            await this.tripService.addTrip(this.trip)
        } else {
            await this.tripService.updateTrip(this.trip);
        }
        this.router.navigateByUrl('/trips');
    }
}