import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectCardComponent } from './featured-project-card.component';

describe('FeaturedProjectCardComponent', () => {
  let component: FeaturedProjectCardComponent;
  let fixture: ComponentFixture<FeaturedProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
