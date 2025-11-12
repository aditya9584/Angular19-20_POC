import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NotAvailablePipe } from '../../Pipes/not-available-pipe';
import { ProgressBar } from "../../reusable/progress-bar/progress-bar";
import { Tabs } from "../../reusable/tabs/tabs";


@Component({
  selector: 'app-ng-for-component',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NotAvailablePipe, ProgressBar, Tabs],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css',
})
export class NgForComponent {


  customerTabs: string[]= ["Basic Info","Plan Info", "Payments"]

  courseName: string = "Angular";

  currentDate: Date = new Date();

  studentObj: any = {
    name:'John',
    city:'Pune',
    contact:'987654321'
  }

  cityList: string[]= ["Pune", "Mumbai", "Banglore","Goa"];


  employeeArray: any[]= [
    {empId:111, name:'AAA', city:'Pune', contactNo:'123456789', attendance:40},
    {empId:222, city:'Mumbai', contactNo:'987654321', attendance:50},
    {empId:333, name:'CCC', city:'Banglore', contactNo:'123456789', attendance:70},
    {empId:444, name:'', city:'Goa', contactNo:'987654321', attendance:25},
    {empId:555, name:'EEE', city:'Pune', contactNo:'123456789', attendance:100},
    {empId:666, name: null, city:'Goa', contactNo:'987654321', attendance:55},
  ]
}
