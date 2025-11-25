import { Component, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Router } from '@angular/router';
import { ErrorService } from '../../sevices/error-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  imports: [Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  router = inject(Router);
  errService = inject(ErrorService);

  http  = inject(HttpClient)

  constructor(){
    this.errService.tokenExpired$.subscribe((Res:boolean)=>{
      if(Res){
        const loggedData = localStorage.getItem("Angular19TokenData");
        if(loggedData){
        const loggedUser = JSON.parse(loggedData);
        const obj = {
          "emailId":loggedUser.emailId,
          "token": loggedUser.token,
          "refreshToken": loggedUser.refreshToken,
        };
        this.http.post("https://projectapi.gerasim.in/api/UserApp/refresh",obj).subscribe((res:any)=>{
             
            debugger;
            localStorage.setItem('Angular19User', res.data.userId);
            localStorage.setItem('Angular19Token', res.data.token);
            localStorage.setItem('Angular19TokenData', JSON.stringify(res.data));
            this.errService.tokenRecived$.next(true);
        })
        }
      }
    })
  }
}
