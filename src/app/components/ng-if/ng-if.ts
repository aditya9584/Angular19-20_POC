import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIF {
  
  div1Visible : boolean=true;
  number1: string='';
  number2:string= '';

  showDiv1(){
    this.div1Visible = true;
  }

  hideDiv1(){
    this.div1Visible= false;
  }
}
