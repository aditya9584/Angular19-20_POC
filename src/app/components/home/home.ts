import { Component } from '@angular/core';
import { ProgressBar } from "../../reusable/progress-bar/progress-bar";
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../../sevices/error-service';

@Component({
  selector: 'app-home',
  imports: [ProgressBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
  constructor(private httpclient: HttpClient, private http: HttpClient, private errService:ErrorService){
    this.getUsers();
    this.errService.tokenRecived$.subscribe((res:boolean)=>{
      if(res){
        this.getUsers();
      }
    })
  }

  getUsers(){
    this.httpclient.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((Res:any)=>{
      debugger;
    })
  }

}
