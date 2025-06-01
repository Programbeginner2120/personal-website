import { Component, computed, input } from '@angular/core';
import { SocialsButton } from '../../../interfaces/buttons.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-socials-button',
  imports: [CommonModule],
  templateUrl: './socials-button.component.html',
  styleUrl: './socials-button.component.scss'
})
export class SocialsButtonComponent {

  readonly socialsButton = input.required<SocialsButton>();
  readonly mode = input<string>('regular');

  readonly hasIconClasses = computed(() => {
    const iconClasses = this.socialsButton().iconClasses;
    return !!iconClasses && iconClasses.length > 0;
  });

  readonly hasLabel = computed(() => {
    return this.socialsButton().label;
  });

  readonly hasDisplayLink = computed(() => {
    return this.socialsButton().displayLink;
  });

  readonly iconClassesExtended = computed(() => {
  if (this.hasIconClasses()) {
    if (this.mode() === 'card') {
      return [...this.socialsButton().iconClasses!, 'fa-4x'];
    }
    return this.socialsButton().iconClasses;
  }
  return [];
});

}
