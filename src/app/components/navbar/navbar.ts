import { Component, inject } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatToolbar, MatSidenavModule, MatIconModule, MatListModule, RouterOutlet, MatMenuModule, MatMenuTrigger, MatFormField, MatLabel, RouterLinkActive, MatSelect, MatAnchor],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


  router = inject(Router);

  onLogOff(){
    localStorage.removeItem("Angular19User");
    this.router.navigateByUrl("login");
  }
}
