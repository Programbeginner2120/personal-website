import { Component, computed, input, output, signal } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss'
})
export class AppButtonComponent {

  // Input signals with default values
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

  // Output signals
  clicked = output<MouseEvent>();

  // Internal state
  private clickCount = signal(0);
  private lastClickTime = signal<number>(0);

  // Computed properties
  computedClasses = computed(() => {
    const classes = [
      `btn-${this.variant()}`,
      `btn-${this.size()}`,
      this.customClass()
    ];

    if (this.outline()) {
      classes.push('btn-outline');
    }

    if (this.block()) {
      classes.push('btn-block');
    }

    if (this.loading()) {
      classes.push('loading');
    }

    return classes.filter(Boolean).join(' ');
  });

  // Computed property to track if button was recently clicked (for preventing double-clicks)
  isRecentlyClicked = computed(() => {
    const now = Date.now();
    return now - this.lastClickTime() < 300; // 300ms debounce
  });

  handleClick(event: MouseEvent) {
    // Prevent action if disabled, loading, or recently clicked
    if (this.disabled() || this.loading() || this.isRecentlyClicked()) {
      event.preventDefault();
      return;
    }

    // Update click tracking
    this.clickCount.update(count => count + 1);
    this.lastClickTime.set(Date.now());

    // Emit the click event
    this.clicked.emit(event);
  }

  // Public method to get click statistics (useful for analytics)
  getClickStats() {
    return {
      totalClicks: this.clickCount(),
      lastClickTime: this.lastClickTime()
    };
  }

  // Method to reset click statistics
  resetClickStats() {
    this.clickCount.set(0);
    this.lastClickTime.set(0);
  }

}
