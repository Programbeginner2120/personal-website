import { Component, computed, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { RouteButton } from '../../interfaces/buttons.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../../services/shared/data/data.service';
import { ScreenService } from '../../services/shared/screen/screen.service';
import { Photo } from '../../interfaces/photos.interface';

@Component({
  selector: 'app-photos',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

  // DI
  private dataService = inject(DataService);
  private screenService = inject(ScreenService);

  // Constants
  navButtons: RouteButton[] = [
    { label: "Main Page", route: '/landing-page'}
  ];

  // Signals
  photosSectionData = toSignal(this.dataService.getData('/assets/website-data/photos-section.json'));
  screenMode = toSignal(this.screenService.screenMode$);

  title = computed(() => {
    if (!this.photosSectionData()) {
      return;
    }

    return this.photosSectionData()['title'];
  });

  description = computed(() => {
    if (!this.photosSectionData()) {
      return;
    }

    return this.photosSectionData()['description'];
  });

  photos = computed(() => {
    if (!this.photosSectionData()) {
      return [];
    }

    return (this.photosSectionData()['photos'] as any[])
      .map(photo => {
        return {
          photoUrl: photo.photoUrl,
          height: photo.height,
          width: photo.width
        } as Photo
      });
  });
}
