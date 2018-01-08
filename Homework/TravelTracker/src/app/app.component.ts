import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <nav class="nav">
          <a class="nav-brand" href="#">
              <img style="height: 80px; width: 80px"
                   src="/assets/resources/travel.png">
          </a>
          <a class="nav-link active" [routerLink]="['/trips']">Trips</a>
          <a class="nav-link" [routerLink]="['/add']">
              <i class="fa fa-plus" aria-hidden="true"></i>
              Trip
          </a>
      </nav>

      <div class="container">
          <router-outlet></router-outlet>
      </div>`,
  styleUrls: []
})
export class AppComponent {
  pageTitle= 'Travel Tracker';
}
