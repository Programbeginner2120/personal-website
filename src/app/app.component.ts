import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteButton } from './interfaces/buttons.interface';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-website';

  navButtons: RouteButton[] = [
    { label: 'Home', route: '/' },
    { label: 'About Me', fragment: 'about' },
    { label: 'Experience', fragment: 'experience' },
    // { label: 'Featured Projects', fragment: 'featured-projects'},
    { label: "Let's Connect", fragment: 'lets-connect'}
  ];
}
