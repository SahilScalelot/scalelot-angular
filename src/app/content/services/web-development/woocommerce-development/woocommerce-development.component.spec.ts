import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoocommerceDevelopmentComponent } from './woocommerce-development.component';

describe('WoocommerceDevelopmentComponent', () => {
  let component: WoocommerceDevelopmentComponent;
  let fixture: ComponentFixture<WoocommerceDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoocommerceDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoocommerceDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
