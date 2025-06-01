import { Component, computed, inject, Signal } from '@angular/core';
import { SocialsButton } from '../../interfaces/buttons.interface';
import { SocialsButtonComponent } from '../shared/socials-button/socials-button.component';
import { AppButtonComponent } from '../shared/app-button/app-button.component';
import { FileDownloadService } from '../../services/shared/file-download/file-download.service';
import { AppDownloadButtonComponent } from '../shared/app-download-button/app-download-button.component';
import { FileDownloadRequest } from '../../interfaces/file.interface';
import { DataService } from '../../services/shared/data/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-main-section',
    imports: [SocialsButtonComponent, AppButtonComponent, AppDownloadButtonComponent],
    templateUrl: './main-section.component.html',
    styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

    // DI
    private readonly fileDownloadService = inject(FileDownloadService);
    private readonly dataService = inject(DataService);

    mainSectionData = toSignal(this.dataService.getData('/assets/website-data/main-section.json'));

    readonly name = computed(() => {
        if (!this.mainSectionData()) {
            return;
        }

        return this.mainSectionData()['name'];
    });

    readonly description = computed(() => {
        if (!this.mainSectionData()) {
            return;
        }

        return this.mainSectionData()['description'];
    });

    readonly socialsButtons: Signal<SocialsButton[] | undefined> = computed(() => {
        if (!this.mainSectionData()) {
            return;
        }

        const mainSectionData = this.mainSectionData();
        const socialsButtons: any[] = mainSectionData['socialsButtons'];

        return socialsButtons.map(socialsButton => {
            return {
                href: socialsButton['href'],
                iconClasses: socialsButton['iconClasses'],
                label: socialsButton['label'],
                isEmail: socialsButton['isEmail']
            } as SocialsButton
        });
    });

    handleButtonClick() {
        console.log("BUTTON CLICKED!");
    }

    handleDownloadButtonClick(request: FileDownloadRequest) {
        this.fileDownloadService.downloadFile(request.fileUri, request.filename);
        console.log("DOWNLOAD BUTTON CLICKED!");
    }

}
