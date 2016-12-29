import { Component } from '@angular/core';
import { User }    from './user';

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  template: 'hero-form.component.html',
})
export class AppComponent  { 

  model = new User('','','','','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

 }
