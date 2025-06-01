import { Component, input } from '@angular/core';
import { LabelBadgeComponent } from '../label-badge/label-badge.component';
import { Experience } from '../../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-card',
  imports: [LabelBadgeComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  readonly experience = input.required<Experience>();

}
