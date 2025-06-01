import { afterNextRender, Component, computed, ElementRef, inject, Signal, signal } from '@angular/core';
import { ScrollAnimationService } from '../../services/shared/scroll-animation/scroll-animation.service';
import { DataService } from '../../services/shared/data/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouteButton } from '../../interfaces/buttons.interface';
import { FeaturedProject } from '../../interfaces/featured-project.interface';
import { FeaturedProjectCardComponent } from '../shared/featured-project-card/featured-project-card.component';

@Component({
    selector: 'app-featured-projects-section',
    imports: [FeaturedProjectCardComponent],
    templateUrl: './featured-projects-section.component.html',
    styleUrl: './featured-projects-section.component.scss',
    animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class FeaturedProjectsSectionComponent {

    //DI
    private scrollService = inject(ScrollAnimationService);
    private elementRef = inject(ElementRef);
    private dataService = inject(DataService);

    // Signals
    isVisible: Signal<boolean> = signal(false);

    featuredProjectsSectionData = toSignal(this.dataService.getData('/assets/website-data/featured-projects-section.json'));

    //Computed
    readonly title = computed(() => {
        if (!this.featuredProjectsSectionData()) {
            return;
        }

        return this.featuredProjectsSectionData()['title'];
    });

    readonly description = computed(() => {
        if (!this.featuredProjectsSectionData()) {
            return;
        }

        return this.featuredProjectsSectionData()['description'];
    });

    readonly featuredProjects = computed(() => {
        if (!this.featuredProjectsSectionData()) {
            return [];
        }

        const featuredProjects: any[] = this.featuredProjectsSectionData()['featuredProjects'];
        return featuredProjects.map(project => {
            return {
                title: project['title'],
                description: project['description'],
                imageUri: project['imageUri'],
                technologies: project['technologies'] as string[],
                buttons: (project['buttons'] as any[]).map(button => {
                    return {
                        label: button['label'],
                        route: button['route'],
                        external: button['external']
                    } as RouteButton
                })
            } as FeaturedProject
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
