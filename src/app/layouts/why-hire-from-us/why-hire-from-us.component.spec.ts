import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHireFromUsComponent } from './why-hire-from-us.component';

describe('WhyHireFromUsComponent', () => {
  let component: WhyHireFromUsComponent;
  let fixture: ComponentFixture<WhyHireFromUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyHireFromUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyHireFromUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
