import { animate, state, style, transition, trigger } from '@angular/animations';
import { afterNextRender, Component, ElementRef, inject, signal, Signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { ExperienceCardComponent } from '../shared/experience-card/experience-card.component';

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

    // Signals
    isVisible: Signal<boolean> = signal(false);

    // To be removed later
    readonly experiences = [
        {
            title: 'Software Engineer',
            company: 'LBi Software',
            duration: '2024 - Present',
            description: 'Work with fellow software engineers to build web apps for clients',
            technologies: [
                'Java',
                'SQL',
                'AWS'
            ]
        },
        {
            title: 'Software Engineer',
            company: 'Infosys Limited',
            duration: '2022 - 2023',
            description: 'Work with fellow software engineers to build web apps for clients',
            technologies: [
                'Java',
                'SQL',
                'AWS'
            ]
        },
        {
            title: 'Undergraduate Researcher',
            company: 'Data Mining and Management Lab, University at Albany, SUNY',
            duration: '2021-2022',
            description: 'Work with fellow researchers on generating ideal forms of nano-clusters using various machine learning techniques.',
            technologies: [
                'Python',
                'PyTorch',
                'NumPy',
                'Pandas',
                'Matplotlib'
            ]
        }
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
