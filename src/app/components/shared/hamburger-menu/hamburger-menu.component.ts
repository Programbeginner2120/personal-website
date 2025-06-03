import { Component, signal } from '@angular/core';
import { RouteButton } from '../../../interfaces/buttons.interface';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
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
