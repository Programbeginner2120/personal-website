import { animate, state, style, transition, trigger } from '@angular/animations';
import { afterNextRender, Component, ElementRef, inject, signal, Signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { DataService } from '../../services/shared/data/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-networking-section',
    imports: [],
    templateUrl: './networking-section.component.html',
    styleUrl: './networking-section.component.scss',
    animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class NetworkingSectionComponent {

    //DI
    private scrollService = inject(ScrollAnimationService);
    private elementRef = inject(ElementRef);
    private dataService = inject(DataService);

    // Signals
    isVisible: Signal<boolean> = signal(false);

    networkingSectionData = toSignal(this.dataService.getData('/assets/website-data/networking-section.json'));

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
