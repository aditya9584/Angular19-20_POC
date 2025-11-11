import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NotAvailablePipe } from '../../Pipes/not-available-pipe';


@Component({
  selector: 'app-ng-for-component',
  imports: [NgFor, UpperCasePipe, LowerCasePipe,JsonPipe,DatePipe,NotAvailablePipe],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css',
})
export class NgForComponent {


  courseName: string = "Angular";

  currentDate: Date = new Date();

  studentObj: any = {
    name:'John',
    city:'Pune',
    contact:'987654321'
  }

  cityList: string[]= ["Pune", "Mumbai", "Banglore","Goa"];


  employeeArray: any[]= [
    {empId:111, name:'AAA', city:'Pune', contactNo:'123456789'},
    {empId:222, city:'Mumbai', contactNo:'987654321'},
    {empId:333, name:'CCC', city:'Banglore', contactNo:'123456789'},
    {empId:444, name:'', city:'Goa', contactNo:'987654321'},
    {empId:555, name:'EEE', city:'Pune', contactNo:'123456789'},
    {empId:666, name: null, city:'Goa', contactNo:'987654321'},
  ]
}
