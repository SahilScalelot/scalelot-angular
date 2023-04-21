import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactjsDevelopmentComponent } from './reactjs-development.component';

describe('ReactjsDevelopmentComponent', () => {
  let component: ReactjsDevelopmentComponent;
  let fixture: ComponentFixture<ReactjsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactjsDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactjsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
