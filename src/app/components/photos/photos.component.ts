import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { RouteButton } from '../../interfaces/buttons.interface';

@Component({
  selector: 'app-photos',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

  navButtons: RouteButton[] = [
    { label: "Main Page", route: '/landing-page'}
  ];
}
