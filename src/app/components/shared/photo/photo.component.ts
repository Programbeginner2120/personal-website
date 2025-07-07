import { Component, inject, input } from '@angular/core';
import { Photo } from '../../../interfaces/photos.interface';
import { ScreenService } from '../../../services/shared/screen/screen.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {

  // DI
  private screenService = inject(ScreenService);

  // Input signals
  photo = input.required<Photo>();

  // Signals
  screenMode = toSignal(this.screenService.screenMode$);

}
