import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicDesignComponent } from './infographic-design.component';

describe('InfographicDesignComponent', () => {
  let component: InfographicDesignComponent;
  let fixture: ComponentFixture<InfographicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
