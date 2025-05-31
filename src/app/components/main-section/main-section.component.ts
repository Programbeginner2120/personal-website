import { Component } from '@angular/core';
import { SocialsButton } from '../../interfaces/buttons.interface';
import { SocialsButtonComponent } from './components/socials-button/socials-button.component';

@Component({
    selector: 'app-main-section',
    imports: [SocialsButtonComponent],
    templateUrl: './main-section.component.html',
    styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

    readonly socialsButtons: SocialsButton[] = [
        {
            href: 'https://github.com/Programbeginner2120',
            iconClasses: ["fab", "fa-github"],
            isEmail: false
        },
        {
            href: 'https://github.com/Programbeginner2120',
            iconClasses: ["fab", "fa-github"],
            isEmail: false
        },
        {
            href: 'https://github.com/Programbeginner2120',
            iconClasses: ["fab", "fa-github"],
            isEmail: false
        }
    ];

}
