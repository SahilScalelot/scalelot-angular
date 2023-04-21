import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppDesignComponent } from './mobile-app-design.component';

describe('MobileAppDesignComponent', () => {
  let component: MobileAppDesignComponent;
  let fixture: ComponentFixture<MobileAppDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
