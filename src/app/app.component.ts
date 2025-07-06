import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteButton } from './interfaces/buttons.interface';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-website';
}
