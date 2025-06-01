import { Component, ElementRef, OnDestroy, Signal, WritableSignal, afterNextRender, inject, input, signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LabelBadgeComponent } from '../shared/label-badge/label-badge.component';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
  imports: [LabelBadgeComponent],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class AboutMeSectionComponent implements OnDestroy {

    // DI
    private scrollService = inject(ScrollAnimationService);
    private elementRef = inject(ElementRef);

    // Signals
    isVisible: Signal<boolean> = signal(false);

    technologies: string[] = [
        'Java',
        'Python',
        'JavaScript',
        'TypeScript',
        'Spring',
        'Spring Boot',
        'Angular',
        'AWS',
        'Docker'
    ];

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