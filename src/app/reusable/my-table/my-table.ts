import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [JsonPipe],
  templateUrl: './my-table.html',
  styleUrl: './my-table.css',
})
export class MyTable {

  @Input() colArray:string[]=[];

  @Input() gridDataList:any[]=[];
}
