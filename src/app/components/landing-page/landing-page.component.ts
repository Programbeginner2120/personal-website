import { Component } from '@angular/core';
import { MainSectionComponent } from '../main-section/main-section.component';
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { FeaturedProjectsSectionComponent } from '../featured-projects-section/featured-projects-section.component';

@Component({
    selector: 'app-landing-page',
    imports: [MainSectionComponent, AboutMeSectionComponent, ExperienceSectionComponent, FeaturedProjectsSectionComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
