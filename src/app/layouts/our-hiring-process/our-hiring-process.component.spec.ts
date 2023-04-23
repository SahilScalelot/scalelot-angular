import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHiringProcessComponent } from './our-hiring-process.component';

describe('OurHiringProcessComponent', () => {
  let component: OurHiringProcessComponent;
  let fixture: ComponentFixture<OurHiringProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurHiringProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurHiringProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
