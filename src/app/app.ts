import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIF } from "./components/ng-if/ng-if";
import { NgClassComponent } from "./components/ng-class-component/ng-class-component";
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { NgStyleComponent } from './components/ng-style-component/ng-style-component';



@Component({
  selector: 'app-root',
  imports: [Navbar, NgClass, CommonModule, RouterOutlet, MatSidenavModule, MatToolbar, MatButtonModule, MatListModule, MatIconModule, NgIF, NgClassComponent, NgStyleComponent, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('POC_Angular');
}
