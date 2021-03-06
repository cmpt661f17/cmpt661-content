import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TripService } from './trip.service';
import { HttpClientModule } from '@angular/common/http';
import { TripsComponent } from './trips/trips.component';

import { RatingStarsComponent } from './shared/rating-stars/rating-stars.component';
import { TripEditorComponent } from './trip-editor/trip-editor.component';
import { LandmarksEditorComponent } from './landmarks-editor/landmarks-editor.component';
import { LandmarksViewerComponent } from './landmarks-viewer/landmarks-viewer.component';
import { CustomFormsModule } from 'ng2-validation'

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  { path: 'trips', component: TripsComponent },
  { path: 'add' , component: TripEditorComponent},
  { path: 'update/:id', component: TripEditorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    RatingStarsComponent,
    TripEditorComponent,
    LandmarksEditorComponent,
    LandmarksViewerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
