import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRouteButtonComponent } from './app-route-button.component';

describe('AppRouteButtonComponent', () => {
  let component: AppRouteButtonComponent;
  let fixture: ComponentFixture<AppRouteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRouteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRouteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
