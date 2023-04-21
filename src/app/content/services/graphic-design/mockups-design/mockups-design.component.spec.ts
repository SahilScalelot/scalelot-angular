import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupsDesignComponent } from './mockups-design.component';

describe('MockupsDesignComponent', () => {
  let component: MockupsDesignComponent;
  let fixture: ComponentFixture<MockupsDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupsDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockupsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
