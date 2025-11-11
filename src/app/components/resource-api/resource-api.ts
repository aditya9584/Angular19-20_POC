import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [JsonPipe],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceAPI {

  userList = resource({
    loader:()=>{
      return fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json() as Promise<any[]>)
    }
  })

  reloadData(){
    this.userList.reload();
  }
}
