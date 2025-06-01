import { animate, state, style, transition, trigger } from '@angular/animations';
import { afterNextRender, Component, computed, ElementRef, inject, signal, Signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { ExperienceCardComponent } from '../shared/experience-card/experience-card.component';
import { DataService } from '../../services/shared/data/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '../../interfaces/experience.interface';

@Component({
    selector: 'app-experience-section',
    imports: [ExperienceCardComponent],
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
    private dataService = inject(DataService);

    // Signals
    isVisible: Signal<boolean> = signal(false);

    experienceSectionData = toSignal(this.dataService.getData('/assets/website-data/experience-section.json'));

    // Computed
    title = computed(() => {
        if (!this.experienceSectionData()) {
            return;
        }

        return this.experienceSectionData()['title'];
    });

    description = computed(() => {
        if (!this.experienceSectionData()) {
            return;
        }

        return this.experienceSectionData()['description'];
    });

    experiences = computed(() => {
        if (!this.experienceSectionData()) {
            return [];
        }

        const experiences: any[] = this.experienceSectionData()['experienceCards'];
        return experiences.map(experience => {
            return {
                title: experience['title'],
                company: experience['company'],
                duration: experience['duration'],
                description: experience['description'],
                technologies: experience['technologies'] as string[]
            } as Experience
        });
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
