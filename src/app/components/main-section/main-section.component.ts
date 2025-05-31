import { Component } from '@angular/core';
import { SocialsButton } from '../../interfaces/buttons.interface';
import { SocialsButtonComponent } from '../shared/socials-button/socials-button.component';
import { AppButtonComponent } from '../shared/app-button/app-button.component';

@Component({
    selector: 'app-main-section',
    imports: [SocialsButtonComponent, AppButtonComponent],
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
            href: 'https://www.linkedin.com/in/matthew-r-killeen',
            iconClasses: ["fab", "fa-linkedin"],
            isEmail: false
        },
        {
            href: 'mailto:Matthewkilleen99@gmail.com',
            iconClasses: ["fa-solid", "fa-envelope"],
            isEmail: false
        }
    ];

    handleButtonClick() {
        console.log("BUTTON CLICKED!");
    }

}
