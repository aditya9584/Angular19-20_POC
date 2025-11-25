import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    
  loginObj:any ={
     userName:'',
     password:''
  };

  apiLoginObj: any ={
    "EmailId":"",
    "Password":""
  }

  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apiLoginObj).subscribe((res:any)=>{
      debugger;
      localStorage.setItem("Angular19User",res.data.userId);
      localStorage.setItem("Angular19Token",res.data.token);

      localStorage.setItem("Angular19TokenData", JSON.stringify(res.data));
      this.router.navigateByUrl("home")
    },error=>{
      debugger;
      alert("Invalid Credentials");
    })
  }
}
