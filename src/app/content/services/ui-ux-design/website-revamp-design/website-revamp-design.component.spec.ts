import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteRevampDesignComponent } from './website-revamp-design.component';

describe('WebsiteRevampDesignComponent', () => {
  let component: WebsiteRevampDesignComponent;
  let fixture: ComponentFixture<WebsiteRevampDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteRevampDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteRevampDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
