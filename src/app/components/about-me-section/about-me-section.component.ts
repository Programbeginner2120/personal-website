import { Component, ElementRef, OnDestroy, Signal, WritableSignal, afterNextRender, computed, inject, input, signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LabelBadgeComponent } from '../shared/label-badge/label-badge.component';
import { DataService } from '../../services/shared/data/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ScreenService } from '../../services/shared/screen/screen.service';

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
    private dataService = inject(DataService);
    private screenService = inject(ScreenService);

    // Signals
    isVisible: Signal<boolean> = signal(false);

    aboutMeSectionData = toSignal(this.dataService.getData('/assets/website-data/about-me-section.json'));

    screenMode = toSignal(this.screenService.screenMode$);

    // Computed
    readonly title = computed(() => {
      if (!this.aboutMeSectionData()) {
        return;
      }

      return this.aboutMeSectionData()['title'];
    });

    readonly descriptionParagraphs = computed(() => {
      if (!this.aboutMeSectionData()) {
        return [];
      }

      return this.aboutMeSectionData()['descriptionParagraphs'] as string[];
    });

    readonly technologiesTitle = computed(() => {
      if (!this.aboutMeSectionData()) {
        return;
      }

      return this.aboutMeSectionData()['technologiesTitle'];
    });

    readonly technologies = computed(() => {
      if (!this.aboutMeSectionData()) {
        return [];
      }

      return this.aboutMeSectionData()['technologies'] as string[];
    });

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