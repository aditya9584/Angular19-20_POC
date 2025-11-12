import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProgressBar } from "../../reusable/progress-bar/progress-bar";

@Component({
  selector: 'app-about',
  imports: [RouterLink, ProgressBar],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
