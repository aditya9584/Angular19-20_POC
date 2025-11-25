import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-more-less',
  imports: [],
  templateUrl: './show-more-less.html',
  styleUrl: './show-more-less.css',
})
export class ShowMoreLess {

  @Input() text:string= '';
  @Input() minCharToShow: number = 0;

  isShowMore: boolean =false;
}
