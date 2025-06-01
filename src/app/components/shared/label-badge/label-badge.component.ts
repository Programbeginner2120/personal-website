import { Component, input } from '@angular/core';

@Component({
  selector: 'app-label-badge',
  imports: [],
  templateUrl: './label-badge.component.html',
  styleUrl: './label-badge.component.scss'
})
export class LabelBadgeComponent {

  readonly label = input.required<string>();

}
