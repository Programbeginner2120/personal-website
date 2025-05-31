import { Component, computed, input } from '@angular/core';
import { SocialsButton } from '../../../../interfaces/buttons.interface';

@Component({
  selector: 'app-socials-button',
  imports: [],
  templateUrl: './socials-button.component.html',
  styleUrl: './socials-button.component.scss'
})
export class SocialsButtonComponent {

  readonly socialsButton = input.required<SocialsButton>();

  readonly hasIconClasses = computed(() => {
    const iconClasses = this.socialsButton().iconClasses;
    return !!iconClasses && iconClasses.length > 0;
  });

  readonly hasLabel = computed(() => {
    return this.socialsButton().label;
  });

}
