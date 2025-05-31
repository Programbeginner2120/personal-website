import { Component, ElementRef, OnDestroy, Signal, WritableSignal, afterNextRender, inject, signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class AboutMeSectionComponent implements OnDestroy {

  private scrollService = inject(ScrollAnimationService);
  private elementRef = inject(ElementRef);
  
  isVisible: Signal<boolean> = signal(false);
  
  constructor() {
    afterNextRender(() => {
      const visibilitySignal = this.scrollService.observeElement(this.elementRef);
      // You could also use effect() to react to signal changes if needed
      this.isVisible = visibilitySignal;
    });
  }
  
  ngOnDestroy() {
    this.scrollService.unobserveElement(this.elementRef);
  }
}