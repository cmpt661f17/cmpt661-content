import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from './customer'

@Component({
    selector: 'my-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent  {
    customer: Customer= new Customer();

    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
 }
