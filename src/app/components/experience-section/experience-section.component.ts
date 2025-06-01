import { animate, state, style, transition, trigger } from '@angular/animations';
import { afterNextRender, Component, ElementRef, inject, signal, Signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';

@Component({
    selector: 'app-experience-section',
    imports: [],
    templateUrl: './experience-section.component.html',
    styleUrl: './experience-section.component.scss',
    animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class ExperienceSectionComponent {

    //DI
    private scrollService = inject(ScrollAnimationService);
    private elementRef = inject(ElementRef);

    // Signals
    isVisible: Signal<boolean> = signal(false);

    constructor() {
        afterNextRender(() => {
            const visibilitySignal = this.scrollService.observeElement(this.elementRef);
            this.isVisible = visibilitySignal;
        });
    }

    ngOnDestroy() {
        this.scrollService.unobserveElement(this.elementRef);
    }

}
