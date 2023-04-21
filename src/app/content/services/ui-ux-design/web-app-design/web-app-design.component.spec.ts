import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppDesignComponent } from './web-app-design.component';

describe('WebAppDesignComponent', () => {
  let component: WebAppDesignComponent;
  let fixture: ComponentFixture<WebAppDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAppDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
