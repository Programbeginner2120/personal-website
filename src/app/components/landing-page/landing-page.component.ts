import { Component } from '@angular/core';
import { MainSectionComponent } from '../main-section/main-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MainSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
