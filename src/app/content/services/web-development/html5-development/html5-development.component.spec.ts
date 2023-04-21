import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5DevelopmentComponent } from './html5-development.component';

describe('Html5DevelopmentComponent', () => {
  let component: Html5DevelopmentComponent;
  let fixture: ComponentFixture<Html5DevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5DevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Html5DevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
