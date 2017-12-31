import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HttpClientModule} from "@angular/common/http";
import {HeroService} from "./hero.service";
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'add', component: HeroEditorComponent },
  { path: 'update/:id', component: HeroEditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroEditorComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
