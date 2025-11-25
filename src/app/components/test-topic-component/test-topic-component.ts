import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { ShowMoreLess } from "../../reusable/show-more-less/show-more-less";
import { MyCard } from "../../reusable/my-card/my-card";
import { MyTable } from "../../reusable/my-table/my-table";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test-topic-component',
  imports: [ShowMoreLess, MyCard, MyTable],
  templateUrl: './test-topic-component.html',
  styleUrl: './test-topic-component.css',
})
export class TestTopicComponent {
    
    http = inject(HttpClient);

    sampleText ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt earum deserunt a debitis ratione unde minima, laudantium veritatis cupiditate.";

    userList:any[]=[];
    
    empList:any[]=[
      {empId:111, empName:'ABC', empProjectName:'AAAAAA'},
      {empId:222, empName:'ddd', empProjectName:'BBBBBB'},
      {empId:333, empName:'ccc', empProjectName:'CCCCCC'},
      {empId:444, empName:'eee', empProjectName:'VVVVVV'}
    ]

    isShow: boolean = false;

    cityList=["Pune","Goa","Mumbai"];

   double = signal<number>(5);         //signal
   doubleCount= computed(()=>this.double()*2)         //Computed signal

   firstNum= signal<number>(6);
   secondNum = signal<number>(10);
   
   totalValue= linkedSignal({
    source: this.firstNum,
    computation:()=>this.firstNum()+ this.secondNum()
   })
  
   

   ngOnInit():void{
    setTimeout(()=>{
      this.double.set(8);
      this.secondNum.set(18)
    },5000);
    setTimeout(() => {
      this.firstNum.set(12);
    }, 10000);
    this.getUser();
   }


   getUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
      this.userList = res;
    })
   }
}
