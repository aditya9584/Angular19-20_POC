import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css',
})
export class LinkedSignal {


  firstName = signal<string>("John");
  lastName = signal<string>("Doe");

  fullName = linkedSignal({
    source: this.firstName,
    computation:(newOptions, previous)=>{
      const fullName = newOptions + " " + this.lastName()
      return fullName;
    }
  })

  user = signal({id:111, name:"Rob"});

  email = linkedSignal({
    source:this.user,
    computation: user=> `${user.name+user.id}@gmail.com`,
    equal: (a:any, b:any)=> a.id !== b.id
  })

    changeName(){
      this.firstName.set("James");
    }
    changeId(){
      debugger;
      this.user.set({id:123, name:"Jacob"});
    }
}
