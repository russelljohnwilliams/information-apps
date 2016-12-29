import { Component } from '@angular/core';
import { User }    from './user';

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  template: `<input type="text" id="firstName"
             [(ngModel)]="model.firstName" name="firstName" placeholder="First Name" required>
      <input type="text" id="lastName"
             [(ngModel)]="model.lastName" name="lastName" placeholder="Last name" required>
      <input type="text" id="email"
             [(ngModel)]="model.email" name="email" placeholder="E-mail" required>
      <input type="text" id="phone"
             [(ngModel)]="model.phone" name="phone" placeholder="Phone" required>

      <select id="country" [(ngModel)]="model.country" name="country" required>
        <option value="" disabled>Country</option>
        <option value="uk">United Kingdom</option>
        <option value="europe">Europe</option>
        <option value="usa">USA</option>
        <option value="china">China</option>
      </select>
      <input type="text" id="city"
             [(ngModel)]="model.city" name="city" placeholder="City" required>
      <input type="text" id="postcode"
             [(ngModel)]="model.postCode" name="postCode" placeholder="Post code" required>
      <input type="text" id="address"
            [(ngModel)]="model.address" name="address" placeholder="Address" required>
      <input type="text" id="additional"
             [(ngModel)]="model.additionalInfo" name="additionalInfo" placeholder="Additional info">
      <button type="submit" id="submit" >Submit</button>

      <div class="name">
        <div class="col-xs-3">Name: {{ model.firstName }} {{model.lastName}}</div>
        <div class="col-xs-3">E-mail: {{ model.email }}</div>
        <div class="col-xs-3">Phone: {{ model.phone }}</div>
      </div>

      <div class="address">
        <div class="col-xs-3">Address: {{ model.address }}, {{ model.city }}, {{ model.postCode }}, {{ model.country}}</div>
        <div class="col-xs-3">Additional info: {{ model.aditionalInfo }}</div>
      


             `,
})
export class AppComponent  { 

  model = new User('','','','','','','','','');

 }
