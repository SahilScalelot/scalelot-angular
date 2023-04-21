import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTopServiceComponent } from './our-top-service.component';

describe('OurTopServiceComponent', () => {
  let component: OurTopServiceComponent;
  let fixture: ComponentFixture<OurTopServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTopServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTopServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
