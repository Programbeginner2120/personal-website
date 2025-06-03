import { Component, input } from '@angular/core';
import { RouteButton } from '../../../interfaces/buttons.interface';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly routeButtons = input.required<RouteButton[]>();

}
