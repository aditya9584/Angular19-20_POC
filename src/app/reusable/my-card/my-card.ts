import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-my-card',
  imports: [NgTemplateOutlet],
  templateUrl: './my-card.html',
  styleUrl: './my-card.css',
})
export class MyCard {

  @Input() cardTitle: string = '';
  @Input() htmlTemplate!: TemplateRef<Element>;
  @Input() showFooter: boolean = false;
}
