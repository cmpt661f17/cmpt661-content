import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  baseUrl : string = '/api/heroes';

  constructor(private http: HttpClient) {
  }

  getHeroes() {
    return this.http.get(this.baseUrl);
  }

  getHero(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addHero(hero:Hero) {
    delete hero._id;
    console.log("Hero to add", JSON.stringify(hero));
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.baseUrl, JSON.stringify(hero), httpOptions );
  }

  updateHero(hero: Hero) {
    console.log("Hero to be updated", JSON.stringify(hero));
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(`${this.baseUrl}/${hero._id}`, JSON.stringify(hero), httpOptions );
  }

  deleteHero(heroId: string) {
    return this.http.delete(`${this.baseUrl}/${heroId}`);
  }
}
