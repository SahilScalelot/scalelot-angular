import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingDesignComponent } from './branding-design.component';

describe('BrandingDesignComponent', () => {
  let component: BrandingDesignComponent;
  let fixture: ComponentFixture<BrandingDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
