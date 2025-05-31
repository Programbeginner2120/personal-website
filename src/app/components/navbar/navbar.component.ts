import { Component, input } from '@angular/core';
import { RouteButton } from '../../interfaces/routing.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly routeButtons = input.required<RouteButton[]>();

}
