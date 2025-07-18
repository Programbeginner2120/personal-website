import { Component } from '@angular/core';
import { MainSectionComponent } from '../main-section/main-section.component';
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { FeaturedProjectsSectionComponent } from '../featured-projects-section/featured-projects-section.component';
import { NetworkingSectionComponent } from '../networking-section/networking-section.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouteButton } from '../../interfaces/buttons.interface';

@Component({
    selector: 'app-landing-page',
    imports: [MainSectionComponent, AboutMeSectionComponent, ExperienceSectionComponent, FeaturedProjectsSectionComponent, NetworkingSectionComponent, HeaderComponent, FooterComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

    navButtons: RouteButton[] = [
    { label: 'Home', route: '/' },
    { label: 'About Me', fragment: 'about' },
    { label: 'Experience', fragment: 'experience' },
    // { label: 'Featured Projects', fragment: 'featured-projects'},
    { label: "Let's Connect", fragment: 'lets-connect'},
    { label: "Photos", route: 'photos'}
  ];

}
