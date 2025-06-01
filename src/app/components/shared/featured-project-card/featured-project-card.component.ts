import { Component, input } from '@angular/core';
import { FeaturedProject } from '../../../interfaces/featured-project.interface';
import { LabelBadgeComponent } from '../label-badge/label-badge.component';
import { CommonModule } from '@angular/common';
import { AppRouteButtonComponent } from '../app-route-button/app-route-button.component';

@Component({
  selector: 'app-featured-project-card',
  imports: [LabelBadgeComponent, CommonModule, AppRouteButtonComponent],
  templateUrl: './featured-project-card.component.html',
  styleUrl: './featured-project-card.component.scss'
})
export class FeaturedProjectCardComponent {

  featuredProject = input.required<FeaturedProject>();

}
