import { animate, state, style, transition, trigger } from '@angular/animations';
import { afterNextRender, Component, computed, ElementRef, inject, signal, Signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { DataService } from '../../services/shared/data/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SocialsButton } from '../../interfaces/buttons.interface';
import { SocialsButtonComponent } from '../shared/socials-button/socials-button.component';

@Component({
    selector: 'app-networking-section',
    imports: [SocialsButtonComponent],
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

    // Computed
    readonly title = computed(() => {
        if (!this.networkingSectionData()) {
            return;
        }

        return this.networkingSectionData()['title'];
    });

    readonly description = computed(() => {
        if (!this.networkingSectionData()) {
            return;
        }

        return this.networkingSectionData()['description'];
    });

    readonly socialsButtons = computed(() => {
        if (!this.networkingSectionData()) {
            return [];
        }

        const socialsButtons: any[] = this.networkingSectionData()['socialsButtons'];
        return socialsButtons.map(button => {
            return {
                href: button['href'],
                iconClasses: button['iconClasses'] as string[],
                label: button['label'],
                displayLink: button['displayLink'],
                isEmail: button['isEmail']
            } as SocialsButton
        });
    })

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
