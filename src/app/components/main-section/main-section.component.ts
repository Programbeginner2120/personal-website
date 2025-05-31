import { Component, inject } from '@angular/core';
import { SocialsButton } from '../../interfaces/buttons.interface';
import { SocialsButtonComponent } from '../shared/socials-button/socials-button.component';
import { AppButtonComponent } from '../shared/app-button/app-button.component';
import { FileDownloadService } from '../../services/shared/file-download/file-download.service';
import { AppDownloadButtonComponent } from '../shared/app-download-button/app-download-button.component';
import { FileDownloadRequest } from '../../interfaces/file.interface';

@Component({
    selector: 'app-main-section',
    imports: [SocialsButtonComponent, AppButtonComponent, AppDownloadButtonComponent],
    templateUrl: './main-section.component.html',
    styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

    readonly fileDownloadService = inject(FileDownloadService);

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

    handleDownloadButtonClick(request: FileDownloadRequest) {
        this.fileDownloadService.downloadFile(request.fileUri, request.filename);
        console.log("DOWNLOAD BUTTON CLICKED!");
    }

}
