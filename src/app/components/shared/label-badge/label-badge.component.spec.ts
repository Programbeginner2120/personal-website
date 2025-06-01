import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelBadgeComponent } from './label-badge.component';

describe('LabelBadgeComponent', () => {
  let component: LabelBadgeComponent;
  let fixture: ComponentFixture<LabelBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
