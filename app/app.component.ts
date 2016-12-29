import { Component } from '@angular/core';
import { User }    from './user';

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  templateUrl: 'form.component.html',
})
export class AppComponent  { 

  model = new User('','','','','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

 }
