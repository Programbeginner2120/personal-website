import { Component, input, signal } from '@angular/core';
import { RouteButton } from '../../../interfaces/buttons.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  imports: [RouterModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  readonly routeButtons = input.required<RouteButton[]>()

  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(current => !current);
  }

  closeMenu() {
    this.isOpen.set(false);
  }

  // Handle clicks within the navigation to close menu on link clicks
  handleNavClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
      this.closeMenu();
    }
  }
}
