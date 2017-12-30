import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//To use reactive form just comment the line below and uncomment the line after it
import { CustomerComponent } from './customer/customer.component';
//import { CustomerComponent } from './customer-reactive/customer.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
