import { Component, inject, input, output } from '@angular/core';
import { ButtonSize, ButtonType, ButtonVariant, RouteButton } from '../../../interfaces/buttons.interface';
import { AppButtonComponent } from '../app-button/app-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-button',
  imports: [AppButtonComponent],
  templateUrl: './app-route-button.component.html',
  styleUrl: './app-route-button.component.scss'
})
export class AppRouteButtonComponent {

  //DI
  private router = inject(Router);

  // Input signal for app-route-button component
  readonly routeButton = input.required<RouteButton>();

  // Input signals for inner app-button component
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  outline = input<boolean>(false);
  block = input<boolean>(false);
  icon = input<string>('');
  label = input<string>('');
  customClass = input<string>('');

  async handleNavigation(): Promise<void> {
    const btn = this.routeButton();
    
    // Handle external links
    if (btn.external) {
      window.open(btn.route, '_blank', 'noopener,noreferrer');
      return;
    }

    // Handle internal routing - matches your original nav logic
    try {
      if (btn.fragment && !btn.route) {
        // Fragment only - stay on current route
        await this.router.navigate([], { fragment: btn.fragment });
      } else if (btn.route && !btn.fragment) {
        // Route only
        await this.router.navigate([btn.route]);
      } else if (btn.route && btn.fragment) {
        // Route + fragment
        await this.router.navigate([btn.route], { fragment: btn.fragment });
      }
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  }
}
