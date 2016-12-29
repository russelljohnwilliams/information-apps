import { Component } from '@angular/core';
import { User }    from './user';

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  template: `

  <div class="container">
    
    <div class="form" [hidden]="submitted">

      <div class="header">
        Checkout form
      </div>

      <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
        <div class="top-section">
        <input type="text" class="firstName"
               [(ngModel)]="model.firstName" name="firstName" placeholder="First Name" required>
        <input type="text" class="lastName"
               [(ngModel)]="model.lastName" name="lastName" placeholder="Last name" required>
        <input type="text" class="email"
               [(ngModel)]="model.email" name="email" placeholder="E-mail" required>
        <input type="text" class="phone"
               [(ngModel)]="model.phone" name="phone" placeholder="Phone" required>
        </div>

        <div class="lower-section">
          <select class="country" [(ngModel)]="model.country" name="country" required>
            <option value="" disabled>Country</option>
            <option value="uk">United Kingdom</option>
            <option value="europe">Europe</option>
            <option value="usa">USA</option>
            <option value="china">China</option>
          </select>
          <input type="text" class="city"
                 [(ngModel)]="model.city" name="city" placeholder="City" required>
          <input type="text" class="postcode"
                 [(ngModel)]="model.postCode" name="postCode" placeholder="Post code" required>
          <input type="text" class="address"
                [(ngModel)]="model.address" name="address" placeholder="Address" required>
          <input type="text" class="additional"
                 [(ngModel)]="model.additionalInfo" name="additionalInfo" placeholder="Additional info">
          <button type="submit" class="submit" >Submit</button>
        </div>
      </form>
    </div>

    <div class="form" [hidden]="!submitted">
      <div class="header">
      You submitted the following information
      </div>
      
      <div class="upper-section">
        <div class="col-xs-3">Name: {{ model.firstName }} {{model.lastName}}</div>
        <div class="col-xs-3">E-mail: {{ model.email }}</div>
        <div class="col-xs-3">Phone: {{ model.phone }}</div>
      </div>

      <div class="lower-section">
        <div class="col-xs-3">Address: {{ model.address }}, {{ model.city }}, {{ model.postCode }}, {{ model.country}}</div>
        <div class="col-xs-3">Additional info: {{ model.aditionalInfo }}</div>
      
        <br>
        <button class="submit" (click)="submitted=false">back</button>
      </div>
    </div>

  </div>


             `,
})
export class AppComponent  { 

  model = new User('','','','','','','','','');

 }
