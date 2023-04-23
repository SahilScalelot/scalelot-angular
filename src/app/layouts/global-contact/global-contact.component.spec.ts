import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalContactComponent } from './global-contact.component';

describe('GlobalContactComponent', () => {
  let component: GlobalContactComponent;
  let fixture: ComponentFixture<GlobalContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
