import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PhotosComponent } from './components/photos/photos.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'main-page', component: LandingPageComponent},
    { path: 'photos', component: PhotosComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
