import { Component, input } from '@angular/core';
import { FeaturedProject } from '../../../interfaces/featured-project.interface';
import { LabelBadgeComponent } from '../label-badge/label-badge.component';
import { AppButtonComponent } from '../app-button/app-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-project-card',
  imports: [LabelBadgeComponent, AppButtonComponent, CommonModule],
  templateUrl: './featured-project-card.component.html',
  styleUrl: './featured-project-card.component.scss'
})
export class FeaturedProjectCardComponent {

  featuredProject = input.required<FeaturedProject>();

}
