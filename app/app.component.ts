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

             `,
})
export class AppComponent  { 

  model = new User('','','','','','','','','');

 }
