import {  ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signal {
  
  firstname = signal("John");
  lastName =  signal<string>("Doe");
  rollNo = signal<number>(0);

  courseName: string = "Angular";

  constructor(){
    const value = this.firstname();   
    setTimeout(()=>{
      // debugger;
      this.courseName = "React";
      this.firstname.set("Jacob");
      // debugger;
    },4000);
  }

  onIncrement(){
    this.rollNo.update(oldValue=> oldValue+1);
  }
}


