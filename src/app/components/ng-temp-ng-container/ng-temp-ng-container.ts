import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './ng-temp-ng-container.html',
  styleUrl: './ng-temp-ng-container.css',
})
export class NgTempNgContainer {

    employeeArray: any[]= [
    {empId:111, isActive:true, name:'AAA', city:'Pune', contactNo:'123456789', attendance:40},
    {empId:222, isActive:false, city:'Mumbai', contactNo:'987654321', attendance:50},
    {empId:333, isActive:true, name:'CCC', city:'Banglore', contactNo:'123456789', attendance:70},
    {empId:444, isActive:false, name:'', city:'Goa', contactNo:'987654321', attendance:25},
    {empId:555, isActive:true, name:'EEE', city:'Pune', contactNo:'123456789', attendance:100},
    {empId:666, isActive:false, name: null, city:'Goa', contactNo:'987654321', attendance:55},
  ]

  isLoader: boolean =true;

  constructor(){
    setTimeout(() => {
      this.isLoader =false;
    }, 3000);
  }
}
