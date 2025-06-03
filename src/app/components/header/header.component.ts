import { Component, inject, input } from '@angular/core';
import { RouteButton } from '../../interfaces/buttons.interface';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ScreenService } from '../../services/shared/screen/screen.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { HamburgerMenuComponent } from '../shared/hamburger-menu/hamburger-menu.component';

@Component({
    selector: 'app-header',
    imports: [NavbarComponent, HamburgerMenuComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // DI
  private screenService = inject(ScreenService);

  readonly headerTitle = input('Default Title');
  readonly routeButtons = input.required<RouteButton[]>();

  //Signals
  readonly screenMode = toSignal(this.screenService.screenMode$);

}
