import { StickyOffset } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.html',
  styleUrl: './control-statement.css',
})
export class ControlStatement {

    div1Visible: boolean = true;
    isChecked: boolean = false;
    dayName: string = '';
    employeeArray: any []=[
      {empId:121, name:'AAA', city:'Pune', contactNo:112233},
      {empId:122, name:'BBB', city:'Goa', contactNo:445566},
      {empId:123, name:'CCC', city:'Banglore', contactNo:778899},
      {empId:124, name:'DDD', city:'Mumbai', contactNo:775533},
    ];
    
    cityList: string[]=["Pune","Goa","Banglore","Hyderabad","Mumbai"];

    hideShowDiv1(isShow: boolean){
      this.div1Visible=isShow;
    }
}
