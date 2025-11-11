import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city:'',
    state: 'Goa',
    zipCode: '',
    isTermsAgreed: false
  }

  onSave(){
    debugger;
    const formValue =  this.userObj;
  }
}
