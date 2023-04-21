import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyDevelopmentComponent } from './shopify-development.component';

describe('ShopifyDevelopmentComponent', () => {
  let component: ShopifyDevelopmentComponent;
  let fixture: ComponentFixture<ShopifyDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopifyDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopifyDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
