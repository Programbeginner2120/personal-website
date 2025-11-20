import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScreenMode } from '../../../interfaces/screen.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  // DI
  private breakpointObserver = inject(BreakpointObserver);

  private screenModeSubject = new BehaviorSubject<ScreenMode | null>(null);
  screenMode$ = this.screenModeSubject.asObservable();

  constructor() {
    this.breakpointObserver.observe([
      '(max-width: 599px) and (orientation: portrait)',
      '(max-width: 932px) and (orientation: landscape)',
      '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
      '(min-width: 933px) and (max-width: 1366px) and (orientation: landscape)',
      '(min-width: 1025px) and (max-width: 1439px)',
      '(min-width: 1440px)'
    ]).subscribe(result => {
      const bp = result.breakpoints;
      if (bp['(max-width: 599px) and (orientation: portrait)']) {
        this.screenModeSubject.next('phone-portrait');
      } else if (bp['(max-width: 932px) and (orientation: landscape)']) {
        this.screenModeSubject.next('phone-landscape');
      } else if (bp['(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)']) {
        this.screenModeSubject.next('tablet-portrait');
      } else if (bp['(min-width: 933px) and (max-width: 1366px) and (orientation: landscape)']) {
        this.screenModeSubject.next('tablet-landscape');
      } else if (bp['(min-width: 1025px) and (max-width: 1439px)']) {
        this.screenModeSubject.next('small-desktop');
      } else if (bp['(min-width: 1440px)']) {
        this.screenModeSubject.next('large-desktop');
      }
    });
  }

}
