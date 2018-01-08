import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { Trip } from './trip';

@Injectable()
export class TripService {
    baseUrl = '/api/trips';

    constructor(private http: HttpClient) {
    }

    getCountries() {
        return this.http.get('/api/countries').toPromise();
    }

    getCities(country) {
        return this.http.get(`/api/cities/${country}`).toPromise();
    }

    getTrips() {
        return this.http.get(this.baseUrl).toPromise();
    }

    getTrip(id: string) {
        return this.http.get(`${this.baseUrl}/${id}`).toPromise();
    }

    addTrip(trip: Trip) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post(this.baseUrl, JSON.stringify(trip), httpOptions).toPromise();
    }

    updateTrip(trip: Trip) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.put(`${this.baseUrl}/${trip._id}`,
            JSON.stringify(trip), httpOptions).toPromise();
    }

    deleteTrip(tripId: string) {
        return this.http.delete(`${this.baseUrl}/${tripId}`).toPromise();
    }
}