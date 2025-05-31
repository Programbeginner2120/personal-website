import { Component, input } from '@angular/core';
import { RouteButton } from '../../interfaces/routing.interface';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-header',
    imports: [NavbarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly headerTitle = input('Default Title');
  readonly routeButtons = input.required<RouteButton[]>();

}
