import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadButtonComponent } from './app-download-button.component';

describe('AppDownloadButtonComponent', () => {
  let component: AppDownloadButtonComponent;
  let fixture: ComponentFixture<AppDownloadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDownloadButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDownloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
