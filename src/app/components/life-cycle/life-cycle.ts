import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  constructor(){
    console.log("Constuctor");
  }

  ngOnInit(): void {
    console.log("NgOnInIt");
    //Used for API call Function
  }

  ngAfterContentInit(): void {
    console.log("NgAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("NgAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInIt",performance.now());             //used for viewchild, getting reference of element
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("NgOnDestory");
  }
}
