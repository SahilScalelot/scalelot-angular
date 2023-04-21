import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridAppDevelopmentComponent } from './hybrid-app-development.component';

describe('HybridAppDevelopmentComponent', () => {
  let component: HybridAppDevelopmentComponent;
  let fixture: ComponentFixture<HybridAppDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridAppDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HybridAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
